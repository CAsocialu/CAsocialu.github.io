import { useState, useEffect } from 'react';
import { capitalizeString } from '../../index.js';
import './StartovacPanel.css';

const CACHE_KEY = 'startovac_data';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

const formatCurrency = (text) => {
    const number = parseInt(text.replace(/[^0-9]/g, ''));
    return number.toLocaleString('cs-CZ')
        .replace('CZK', 'Kč')
        .replace('CZK\u00A0', '')
        + ' Kč';
};

const extractNumber = (text) => {
    return parseInt(text.replace(/[^0-9]/g, ''));
};

const calculatePercentage = (reached, requested) => {
    const reachedNum = extractNumber(reached);
    const requestedNum = extractNumber(requested);
    const percentage = (reachedNum / requestedNum) * 100;
    console.log(percentage, percentage % 1 === 0);
    
    // If the percentage is a whole number, return it without decimals
    return percentage % 1 === 0 ? percentage : percentage.toFixed(1);
};

const getDaysForm = (number) => {
    number = parseInt(number);
    if (number === 1) return 'den';
    if (number >= 2 && number <= 4) return 'dny';
    return 'dní';
};

const getContributorsForm = (number) => {
    number = parseInt(number);
    if (number === 1) return 'přispěvatel';
    if (number >= 2 && number <= 4) return 'přispěvatelé';
    return 'přispěvatelů';
};

const saveToCache = (data) => {
    const cacheData = {
        data,
        timestamp: Date.now()
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
};

const getFromCache = () => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return { data: null, isExpired: true };

    const { data, timestamp } = JSON.parse(cached);
    const isExpired = Date.now() - timestamp > CACHE_DURATION;

    return { data, isExpired };
};

export default function StartovacPanel() {
    const [projectData, setProjectData] = useState({
        reached: '0',
        percentage: '0',
        requested: '0',
        contributors: '0',
        daysLeft: '0',
    });

    const openStartovacPopup = (e) => {
        e.preventDefault();
        const width = (window.outerWidth / 3 * 2);
        const height = (window.outerHeight / 3 * 2);
        const left = (window.outerWidth - width) / 2;
        const top = (window.outerHeight - height) / 2;

        window.open(
            'https://www.startovac.cz/projects/ceskastranaasocialu-2',
            'StartovacWindow',
            `width=${width},height=${height},left=${left},top=${top},scrollbars=1,resizable=1`
        );
    };

    useEffect(() => {
        const fetchStartovacData = async () => {
            try {
                // Get cache data and expired status
                const { data: cachedData, isExpired } = getFromCache();
                
                // Show cached data immediately, even if expired
                if (cachedData) {
                    setProjectData(cachedData);
                }

                // If cache is valid (not expired), don't fetch
                if (!isExpired) {
                    return;
                }

                // Fetch new data in background
                const response = await fetch(
                    'https://api.allorigins.win/raw?url=' +
                    encodeURIComponent('https://www.startovac.cz/projects/ceskastranaasocialu-2')
                );
                const html = await response.text();

                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');

                const findByPartialClass = (parent, partialClass) => {
                    return parent.querySelector(`[class*="${partialClass}"]`);
                };

                const statsPanel = findByPartialClass(doc, 'ProjectPanel__content');

                const projectPanel = findByPartialClass(doc, 'ProjectPanel__header');
                const statItems = Array.from(statsPanel?.querySelectorAll('[class*="ValueStat__root"]') || []);
                const reached = projectPanel?.querySelector('strong em')?.textContent || '0';
                const requested = statItems[0]?.querySelector('strong')?.textContent || '0';
                const contributors = statItems[1]?.querySelector('strong')?.textContent || '0';
                const daysLeft = statItems[2]?.querySelector('strong')?.textContent || '0 days';

                const contributorsNum = parseInt(contributors);
                const daysNum = parseInt(daysLeft);
                const calculatedPercentage = calculatePercentage(reached, requested);

                const newData = {
                    reached: formatCurrency(reached),
                    percentage: calculatedPercentage,
                    requested: formatCurrency(requested),
                    contributors: `${contributorsNum}`,
                    daysLeft: `${daysNum}`,
                };

                setProjectData(newData);
                saveToCache(newData);
            } catch (error) {
                console.error('Error fetching Startovac data:', error);
                // No need to handle cache fallback here since we already showed cached data
            }
        };

        fetchStartovacData();
        const interval = setInterval(fetchStartovacData, CACHE_DURATION);
        return () => clearInterval(interval);
    }, []);

    // In the return statement, update the progress bar section:
    const totalPercentage = parseFloat(projectData.percentage);
    const normalizedBase = totalPercentage > 100
        ? (100 / totalPercentage) * 100
        : totalPercentage;
    const normalizedOverflow = totalPercentage > 100
        ? ((totalPercentage - 100) / totalPercentage) * 100
        : 0;

    return (
        <div className="startovac-panel">
            <h2>Podpořte nás na Startovači</h2>
            <div className="project-stats">
                <div className="progress-header">
                    <span>Vybráno</span>
                    <strong>{projectData.reached}</strong>
                </div>
                <div className="progress-bar">
                    <div
                        className="progress"
                        style={{ width: `${normalizedBase}%` }}
                        role="progressbar"
                        aria-valuenow={totalPercentage > 100 ? 100 : totalPercentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >{totalPercentage > 100 ? '100' : Number((totalPercentage).toFixed(1)) === Number((totalPercentage).toFixed(0)) ? (totalPercentage).toFixed(0) : (totalPercentage).toFixed(1)}%</div>
                    {totalPercentage > 100 && (
                        <div
                            className="progress overflow"
                            style={{
                                width: `${normalizedOverflow}%`,
                                right: '0%'
                            }}
                            role="progressbar"
                            aria-valuenow={totalPercentage - 100}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >+{Number((totalPercentage - 100).toFixed(1)) === Number((totalPercentage - 100).toFixed(0)) ? (totalPercentage - 100).toFixed(0) : (totalPercentage - 100).toFixed(1)}%</div>
                    )}
                </div>
                <div className="stats-grid">
                    <div className="stat-item">
                        <span>Cílová částka</span>
                        <strong>{projectData.requested}</strong>
                    </div>
                    <div className="stat-item">
                        <strong>{projectData.contributors}</strong>
                        <span>{capitalizeString(getContributorsForm(projectData.contributors))}</span>
                    </div>
                    <div className="stat-item">
                        <span>Zbývá</span>
                        <strong>{projectData.daysLeft} {getDaysForm(projectData.daysLeft)}</strong>
                    </div>
                </div>
                <a
                    href="https://www.startovac.cz/projects/ceskastranaasocialu-2/contribute"
                    className="contribute-button"
                    onClick={openStartovacPopup}
                >
                    Přispět
                </a>
            </div>
        </div>
    );
} 