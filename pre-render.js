const puppeteer = require('puppeteer');
const fs = require('fs/promises');
const path = require('path');

const description = "ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem.";

const routes = [
    {
        path: '/',
        title: 'Česká Strana Asociálů',
        canonical: 'https://www.ceskastranaasocialu.cz/'
    },
    {
        path: '/clenove',
        title: 'Členové · ČSA',
        canonical: 'https://www.ceskastranaasocialu.cz/clenove'
    },
    {
        path: '/kontakty',
        title: 'Kontakty · ČSA',
        canonical: 'https://www.ceskastranaasocialu.cz/kontakty'
    },
    {
        path: '/historie',
        title: 'Historie · ČSA',
        canonical: 'https://www.ceskastranaasocialu.cz/historie'
    },
    {
        path: '/pomoc',
        title: 'Chci pomoci · ČSA',
        canonical: 'https://www.ceskastranaasocialu.cz/pomoc'
    },
    {
        path: '/source',
        title: 'Zdroj · ČSA',
        canonical: 'https://www.ceskastranaasocialu.cz/source'
    }
];

async function prerender() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    for (const route of routes) {
        const fileName = route.path === '/' ? 'index.html' : `${route.path.slice(1)}/index.html`;
        const filePath = path.join(__dirname, 'build', fileName);

        // Create directory if it doesn't exist
        const dir = path.dirname(filePath);
        await fs.mkdir(dir, { recursive: true });

        // Load the page
        const fullUrl = `file://${path.join(__dirname, 'build', 'index.html')}`;
        await page.goto(fullUrl);
        await page.waitForSelector('#root');

        // Inject meta tags
        await page.evaluate(({ title, description, canonical }) => {
            // Set title
            document.title = title;

            // Set description
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.name = 'description';
                document.head.appendChild(metaDescription);
            }
            metaDescription.content = description;

            // Set Open Graph meta tags
            const ogTags = {
                'og:title': title,
                'og:description': description,
                'og:image': '/assets/banner.png',
                'og:url': canonical,
                'og:type': 'website'
            };

            for (const [property, content] of Object.entries(ogTags)) {
                let ogTag = document.querySelector(`meta[property="${property}"]`);
                if (!ogTag) {
                    ogTag = document.createElement('meta');
                    ogTag.setAttribute('property', property);
                    document.head.appendChild(ogTag);
                }
                ogTag.content = content;
            }

            // Set Twitter meta tags
            const TwitterTags = {
                'twitter:title': title,
                'twitter:description': description,
                'twitter:image': 'https://ceskastranaasocialu.cz/assets/banner.png',
                'twitter:site': '@CASocialu',
                'twitter:card': 'summary_large_image'
            };

            for (const [property, content] of Object.entries(TwitterTags)) {
                let twitterTag = document.querySelector(`meta[name="${property}"]`);
                if (!twitterTag) {
                    twitterTag = document.createElement('meta');
                    twitterTag.setAttribute('name', property);
                    document.head.appendChild(twitterTag);
                }
                twitterTag.content = content;
            }

            // Set theme-color meta tag
            let themeColorMeta = document.querySelector('meta[name="theme-color"]');
            if (!themeColorMeta) {
                themeColorMeta = document.createElement('meta');
                themeColorMeta.name = 'theme-color';
                document.head.appendChild(themeColorMeta);
            }
            themeColorMeta.content = '#009074';

            // Set canonical URL
            let canonicalLink = document.querySelector('link[rel="canonical"]');
            if (!canonicalLink) {
                canonicalLink = document.createElement('link');
                canonicalLink.rel = 'canonical';
                document.head.appendChild(canonicalLink);
            }
            canonicalLink.href = canonical;

            // Set robots meta tag
            let robots = document.querySelector('meta[name="robots"]');
            if (!robots) {
                robots = document.createElement('meta');
                robots.name = 'robots';
                document.head.appendChild(robots);
            }
            robots.content = 'index, follow';

            // Apply stylesheet link
            let stylesheetLink = document.querySelector('link[href="/index.css"]');
            if (!stylesheetLink) {
                stylesheetLink = document.createElement('link');
                stylesheetLink.rel = 'stylesheet';
                stylesheetLink.href = '/index.css';
                document.head.appendChild(stylesheetLink);
            }

            document.documentElement.setAttribute('data-location', new URL(canonical).pathname.replace(/(?<!^)\/$/, ''));
        }, { ...route, description });

        const html = await page.content();
        await fs.writeFile(filePath, html);
    }

    // Generate sitemap.xml
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${route.canonical}</loc>
    <changefreq>weekly</changefreq>
  </url>`).join('\n')}
</urlset>`;

    await fs.writeFile(path.join(__dirname, 'build', 'sitemap.xml'), sitemapContent);

    await browser.close();
}

prerender().catch(console.error);