/* add code below this */

const companies = JSON.parse(content);

class CompanyCard {
    constructor(c) {
        const s = c.stats;
        this.symbol = c.symbol;
        this.name = c.companyName;
        this.day50 = s.day50MovingAvg;
        this.day200 = s.day200MovingAvg;
        this.revenue = s.operatingRevenue - s.costOfRevenue;
        this.marketCap50 = s.sharesOutstanding * this.day50;
        this.marketCap200 = s.sharesOutstanding * this.day200;
        this.equity = s.totalAssets - s.totalLiabilities;
        this.tags = c.tags;
    }

    currency(num) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(num);
    }

    billions(num) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            notation: 'compact'
        }).format(num);
    }

    outputTags() {
        for (let i = 0; i < this.tags.length; i++) {
            document.write('<small>' + this.tags[i] + '</small>');
        }
    }

    outputCard() {
        document.write('<article class="card">');
        document.write('<h2>' + this.symbol + ' - ' + this.name + '</h2>');
        document.write('<div>');
        document.write('<p>Share Price (50-day avg): <span>' + this.currency(this.day50) + '</span></p>');
        document.write('<p>Share Price (200-day avg): <span>' + this.currency(this.day200) + '</span></p>');
        document.write('<p>Market Cap (50-day avg): <span>' + this.billions(this.marketCap50) + '</span></p>');
        document.write('<p>Market Cap (200-day avg): <span>' + this.billions(this.marketCap200) + '</span></p>');
        document.write('<p>Net Revenue: <span>' + this.billions(this.revenue) + '</span></p>');
        document.write('<p>Shareholder Equity: <span>' + this.billions(this.equity) + '</span></p>');
        document.write('</div>');
        document.write('<footer>');
        this.outputTags();
        document.write('</footer>');
        document.write('</article>');
    }
}

function outputCompanyCards() {
    for (let i = 0; i < companies.length; i++) {
        new CompanyCard(companies[i]).outputCard();
    }
}

outputCompanyCards();