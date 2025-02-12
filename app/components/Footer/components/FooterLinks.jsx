const FooterLinks = () => {
  // Define the four categories of links
  const aboutSouthwest = [
    { label: "What's New", href: '#' },
    { label: 'Press Room', href: '#' },
    { label: 'Investor Relations', href: '#' },
    { label: 'Corporate Citizenship', href: '#' },
    { label: 'Southwest.fm', href: '#' },
    { label: 'Supplier Information', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Code of Conduct', href: '#' },
  ];

  const flyingSouthwest = [
    { label: 'Flying with Southwest', href: '#' },
    { label: 'Rapid Rewards®', href: '#' },
    { label: 'International Travel', href: '#' },
    { label: 'Airport Information', href: '#' },
    { label: 'New Destinations', href: '#' },
    { label: 'Explore Destinations', href: '#' },
    { label: 'Popular Routes', href: '#' },
    { label: 'Tarmac Delay Plan', href: '#' },
    { label: 'Contract of Carriage', href: '#' },
    { label: 'Customer Service Plan', href: '#' },
    { label: 'Flight Schedules', href: '#' },
    { label: 'Carbon Offset Program', href: '#' },
  ];

  const southwestProducts = [
    { label: 'Fare Types and Benefits', href: '#' },
    { label: 'EarlyBird Check-in®', href: '#' },
    { label: 'Upgrade to Business Select®', href: '#' },
    { label: 'Upgraded Boarding', href: '#' },
    { label: 'Southwest® gift card', href: '#' },
    { label: 'Hotels', href: '#' },
    { label: 'Southwest Vacations', href: '#' },
    { label: 'Inflight Entertainment & Internet', href: '#' },
    { label: 'Drinks & Snacks', href: '#' },
    { label: 'Southwest Business', href: '#' },
    { label: 'Southwest Cargo', href: '#' },
    { label: 'Group Travel', href: '#' },
    { label: 'Charter Services', href: '#' },
    { label: 'Southwest® The Store', href: '#' },
    { label: 'Rapid Rewards® Credit Card', href: '#' },
  ];

  const helpCenter = [
    { label: 'Sitemap', href: '#' },
    { label: 'Customer Commitments', href: '#' },
    { label: 'Baggage Policies', href: '#' },
    { label: 'Disability Related Accommodations', href: '#' },
    { label: 'Military & Government Travel', href: '#' },
    { label: 'Extra Seat Policy', href: '#' },
    { label: 'Traveling with Infants', href: '#' },
    { label: 'Pet Policy', href: '#' },
    { label: 'Travel Funds, Refunds, & Reimbursements', href: '#' },
    { label: 'Complete account setup', href: '#' },
    { label: 'Lost and Found', href: '#' },
    { label: 'Southwest Vacations FAQ', href: '#' },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 pb-8 md:grid-cols-2 lg:grid-cols-4">
      {/* About Southwest */}
      <div>
        <h3 className="mb-2 text-[16px] font-bold text-blue-sw">
          About Southwest
        </h3>
        <ul>
          {aboutSouthwest.map((link, index) => (
            <LinkItem key={index} href={link.href} label={link.label} />
          ))}
        </ul>
      </div>

      {/* Flying Southwest */}
      <div>
        <h3 className="mb-2 text-[16px] font-bold text-blue-sw">
          Flying Southwest
        </h3>
        <ul>
          {flyingSouthwest.map((link, index) => (
            <LinkItem key={index} href={link.href} label={link.label} />
          ))}
        </ul>
      </div>

      {/* Southwest Products */}
      <div>
        <h3 className="mb-2 text-[16px] font-bold text-blue-sw">
          Southwest Products
        </h3>
        <ul>
          {southwestProducts.map((link, index) => (
            <LinkItem key={index} href={link.href} label={link.label} />
          ))}
        </ul>
      </div>

      {/* Help Center */}
      <div>
        <h3 className="mb-2 text-[16px] font-bold text-blue-sw">Help Center</h3>
        <ul>
          {helpCenter.map((link, index) => (
            <LinkItem key={index} href={link.href} label={link.label} />
          ))}
        </ul>
      </div>
    </div>
  );
};

// LinkItem Component
const LinkItem = ({ label, href }) => (
  <li className="mb-1">
    <a
      className="text-[13px] text-black-sw hover:text-blue-sw hover:underline hover:decoration-blue-sw"
      href={href}
    >
      {label}
    </a>
  </li>
);

export default FooterLinks;
