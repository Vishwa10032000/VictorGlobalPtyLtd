import {
  FastfoodOutlined,
  ShoppingCartOutlined,
  LocalPharmacyOutlined,
  StyleOutlined,
  DevicesOutlined, AirplanemodeActive, DirectionsBoat, EmailOutlined, LocalShippingOutlined, LocationCityOutlined, PhoneAndroidOutlined,
  
  Warehouse,
  SupportAgent,
  Public
} from "@mui/icons-material";
import ServicesImage from '../assets/OurServices.svg'
import OurServicesImage from '../assets/OurServices2.svg'
import OurCommitmentImage from '../assets/OurCommitment.svg'
import AboutUsImage from '../assets/AboutUs.svg'
import OurReachImage from '../assets/OurReach.svg'
import TrackingImage from '../assets/Tracking.svg'
import ContactUsImage from '../assets/ContactUs.svg'
import RequestQuoteImage from '../assets/RequestQuote.svg'
import HomeImage from '../assets/Home.svg'
import StorageSolutionsImage from '../assets/StorageSolutions.jpg'
import LogisticsSolutionsImage from '../assets/LogisticsSolutions.jpg'

import IndiaImage from '../assets/India.jpg'
import ChinaImage from '../assets/China.jpg'
import MalaysiaImage from '../assets/Malaysia.jpg'


const homePageData = {
  image: HomeImage,
  welcomeMessage: "Welcome to Victor Global Pty Ltd",
  description: "Beyond Boundaries: Fulfilling Every Sector's Needs",
  overview: {
    title: "Overview",
    description: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Victor Global, your one-stop destination for comprehensive end-to-end services in global sourcing. We specialize in connecting businesses with top-notch suppliers worldwide, ensuring seamless procurement processes and superior quality products. With our expertise and extensive network, we pave the way for businesses to thrive in today's competitive marketplace. Our dedicated team meticulously evaluates suppliers, negotiates contracts, and manages logistics to ensure that our clients receive the best possible value for their investments. Leveraging our global network, we identify and partner with reliable suppliers across various industries, including FMCG, fashion, lifestyle, retail goods, and more. Whether you're seeking raw materials, finished products, or custom solutions, we streamline the sourcing process to meet your specific requirements and exceed your expectations.  <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Victor Global Pty Ltd, we elevate your freight experience with comprehensive solutions for all your forwarding needs. From air and sea shipments to customs clearance, warehousing, and local transportation, we deliver reliable, professional services across a wide network spanning Australia, New Zealand, India, Malaysia, Singapore, China, Thailand, the Philippines, Vietnam, and Indonesia. Trust us to handle your transportation requirements and keep you informed with real-time tracking updates.",
  },
  quote: {
    title: "Need A Quote?",
    description: "If you’d like a quote and you have the consignment details ready, head to our quote form and we’ll get back to you with a quote."
  },
  industry: {
    title: "Industry Sectors",
    description: "Victor Global Pty Limited serves a diverse range of industries, providing tailored freight forwarding solutions to meet the unique needs of each sector.",
    sectors: [
      {
        name: "Global Sourcing",
        description: "Effective global product sourcing is essential for securing a competitive edge, enabling you to import top-notch, cost-effective goods to attract customer base. Through strategic partnerships in key regions such as Malaysia, China and India, Victor Global facilitates connections with premier suppliers to address your product sourcing challenges effectively.  ",
        icon: <Public />
      },
      {
        name: "Fast-Moving Consumer Goods (FMCG)",
        description: "We understand the fast-paced nature of the FMCG industry and offer efficient transportation and distribution solutions to ensure your products reach shelves on time, every time.",
        icon: <FastfoodOutlined />
      },
      {
        name: "Retail Goods",
        description: "From clothing and electronics to home goods and beyond, we specialize in handling retail goods of all types, offering reliable shipping and warehousing solutions to keep your supply chain running smoothly.",
        icon: <ShoppingCartOutlined />
      },
     
      {
        name: "Pharmaceutical Products",
        description: "With strict regulations and sensitive products, the pharmaceutical industry requires precise handling and temperature-controlled environments. We provide specialized logistics solutions to ensure the integrity and security of your pharmaceutical shipments from origin to destination.",
        icon: <LocalPharmacyOutlined />
      },
      {
        name: "Lifestyle and Fashion Goods",
        description: "Fashion and lifestyle products demand attention to detail and timely delivery. Our expertise in handling delicate items and our commitment to reliability make us the ideal partner for transporting your fashion and lifestyle goods.",
        icon: <StyleOutlined />
      },
      {
        name: "Technology Products",
        description: "Innovation moves quickly in the technology sector, and so do we. Whether it's the latest gadgets or complex electronic components, we offer tailored logistics solutions to ensure the safe and timely delivery of your technology products.",
        icon: <DevicesOutlined />
      }
    ]
  },
  solutions: {
    title: "Solutions We Provide",
    description: "Victor Global Pty Ltd offers a comprehensive range of freight forwarding solutions to meet your business needs. From secure storage facilities to efficient logistics services, we are committed to providing reliable and professional services to ensure the smooth transportation of your goods.",
    sectors: [
      {
        image: StorageSolutionsImage,
        title: "Storage Solutions",
        description: "Victor Global Pty Limited is committed to giving their customers all that is required to take care of their shipments and hence provide storage/ warehousing solutions. We provide secure and fully racked warehousing solutions with handling and distributing services. We can also store and unpack containers."
      },
      {
        image: LogisticsSolutionsImage,
        title: "Logistics Solutions",
        description: "At Victor Global, we can transport all kinds of containers as side lifter and general container transport. We can also do heavy lift transport, LCL cargo transport and air freight transport."
      }
    ]
  },
  globalSupportPartners:{
    title:"Global Support Partners",
    countries:[{
      image:IndiaImage,
    title:"India",
      description:"With its skilled workforce, India is a key player in industries such as IT, pharmaceuticals, textiles, and automotive components. Experience cost-effective solutions, innovative products, and a rich cultural heritage that adds value to your sourcing experience."
    },{
      image:ChinaImage,
    title:"China",
      description:"Known as the world's manufacturing hub, China offers a vast array of products across various industries, including electronics, textiles, machinery, and consumer goods. Benefit from competitive pricing, advanced manufacturing capabilities, and a well-established logistics infrastructure."
    },{
      image:MalaysiaImage,
    title:"Malaysia",
      description:"Positioned strategically in Southeast Asia, Malaysia boasts a diverse range of industries, from electronics and automotive to palm oil and rubber. Enjoy access to high-quality products, reliable suppliers, and favorable trade agreements, making Malaysia an attractive sourcing destination."
    },]

  }
};


const servicesData = {
  image: ServicesImage,
  title: "Our Services",
  services: [
    {
      title: "Air Freight",
      description: "Fast and reliable air freight solutions for domestic and international shipments.",
      icon: AirplanemodeActive,
      key: "airFreight"
    },
    {
      title: "Sea Freight",
      description: "Efficient sea freight services tailored to meet your shipping needs across the globe.",
      icon: DirectionsBoat,
      key: "seaFreight"
    },
    {
      title: "Customs Clearance",
      description: "Expert customs clearance services to ensure hassle-free movement of your goods through customs.",
      icon: SupportAgent,
      key: "customsClearance"
    },
    {
      title: "Warehousing Solutions",
      description: "Secure and flexible warehousing solutions to manage your inventory effectively.",
      icon: Warehouse,
      key: "warehousingSolutions"
    },
    {
      title: "Local Transportation",
      description: "Reliable local transportation services for seamless delivery of your shipments.",
      icon: LocalShippingOutlined,
      key: "localTransportation"
    }
  ]
};

const aboutUsPageData = {
  image: AboutUsImage,
  welcomeMessage: "About Us",
  description: "At Victor Global Pty Ltd, we're dedicated to taking your freight experience to the next level. As a comprehensive freight forwarding service provider, we offer tailored solutions to meet all your logistical needs.",
  sections: [
    {
      image: OurServicesImage,
      title: "Our Services",
      content: "We specialize in both air and sea freight, customs clearance, warehousing solutions, and local transportation facilities. Whether you're shipping across the globe or just around the corner, we ensure a seamless journey for your shipments from start to finish."
    },
    {
      image: OurCommitmentImage,
      title: "Our Commitment",
      content: "Reliability, trustworthiness, and professionalism are at the core of everything we do. Across our extensive network spanning Australia, New Zealand, India, Malaysia, Singapore, China, Thailand, Philippines, Vietnam, and Indonesia, we deliver exceptional service that you can count on."
    },
    {
      image: OurReachImage,
      title: "Our Reach",
      content: "With our strategic presence in key regions, we ensure that your goods reach their destination efficiently and on time. Our commitment to excellence shines through in every aspect of our service, ensuring your satisfaction every step of the way."
    },
    {
      image: TrackingImage,
      title: "Advanced Tracking",
      content: "At Victor Global Pty Ltd, we understand the importance of transparency and peace of mind. That's why we provide advanced tracking systems to keep you informed throughout the shipping process. With us, you'll always know the status of your shipment, allowing you to plan with confidence."
    }
  ],
  callToAction: "Choose Victor Global Pty Ltd as your trusted partner for all your freight forwarding needs. Experience the difference with our unmatched service and support."
};


const contactUsPageData = {
  image: ContactUsImage,
  title: "Contact Victor Global Pty Ltd",
  subtitle: "Have A Question ?",
  description: "Feel free to reach out to us with any inquiries or feedback. We'd love to hear from you!",
  inputFields: [
    {
      label: "First Name",
      type: "text",
      id: "firstName",
      description: "Your first name",
      required: true
    },
    {
      label: "Last Name",
      type: "text",
      id: "lastName",
      description: "Your last name",
      required: true
    },
    {
      label: "Company Name",
      type: "text",
      id: "companyName",
      description: "Your company's name"
    },
    {
      label: "Role/Position in the Company",
      type: "text",
      id: "role",
      description: "Your role or position in the company"
    },
    {
      label: "Phone",
      type: "tel",
      id: "phone",
      description: "Your phone number",
      required: true
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      description: "Your email address",
      required: true
    },
    {
      label: "How can we help?",
      type: "textarea",
      id: "help",
      rows: 5,
      description: "Please provide details on how we can assist you"
    },
    {
      label: "Yes, I agree to the Victor Global Pty Ltd Privacy Policy and Terms and Conditions",
      type: "checkbox",
      id: "agree",
      description: "Check this box to agree to the privacy policy and terms and conditions"
    }
  ],
  quote: {
    title: "Need A Quote?",
    description: "If you’d like a quote and you have the consignment details ready, head to our quote form and we’ll get back to you with a quote."
  },
  address: {
    title: "Details",
    items: [
      {
        icon: LocationCityOutlined,
        label: "Location",
        value: "201/14 , Elizabeth Street, Malvern Victoria Melbourne 3144, Australia"
      },
      {
        icon: EmailOutlined,
        label: "Email",
        value: "jaya@victorglobalintl.com"
      },
      {
        icon: PhoneAndroidOutlined,
        label: "Phone",
        value: "(+61) 4 3240 2204"
      }
    ]
  }
};

const requestQuotePageData = {
  image: RequestQuoteImage,
  title: "Victor Global Pty Ltd Quote",
  subtitle: "Have A Question ? Need A Quote ?",
  description: "Feel free to reach out to us with any inquiries or feedback. We'd love to hear from you!",
  inputFields: [
    {
      label: "First Name",
      type: "text",
      id: "firstName",
      required: true
    },
    {
      label: "Last Name",
      type: "text",
      id: "lastName",
      required: true
    },
    {
      label: "Phone",
      type: "tel",
      id: "phone",
      required: true
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      required: true
    }, {
      label: "Port of Loading (POI)",
      type: "text",
      id: "POI",
    },
    {
      label: "Port of Discharge (POD)",
      type: "text",
      id: "POD"
    },
    {
      label: "Type of Shipment",
      type: "select",
      id: "typeOfShipment",
      options: ["FCL", "LCL", "AIR"]
    }, {
      label: "Shipment Incoterms",
      type: "select",
      id: "shipmentIncoterms",
      options: ["FOB", "CFR", "EXW", "Unknown"]
    }, {

      label: "Size",
      type: "select",
      id: "size",
      options: ["20GP", "40GP", "40HC"]
    }, {
      label: "Commodity",
      type: "text",
      id: "commodity"
    }, {
      label: "Cargo Type",
      type: "select",
      id: "cargoType",
      options: ["NON HAZ", "HAZ", "REEFER"]
    }, {
      label: "Delivery Requirements",
      type: "select",
      id: "deliveryRequirements",
      options: ["Sideloader (SDL)", "Live unload", "Drop Trailer"]
    },

    {
      label: "Any other delivery instructions",
      type: "textarea",
      id: "help",
      rows: 5,
    },
    {
      label: "Yes, I agree to the Victor Global Pty Ltd Privacy Policy and Terms and Conditions",
      type: "checkbox",
      id: "agree",
      description: "Check this box to agree to the privacy policy and terms and conditions"
    }
  ]
}
const footerContent = {
  logo: '../assets/VictorGlobalLogo.png',
  address: {
    title: "Contact Us",
    items: [
      {
        icon: LocationCityOutlined,
        label: "Location",
        value: "201/14 , Elizabeth Street, Malvern Victoria Melbourne 3144, Australia"
      },
      {
        icon: EmailOutlined,
        label: "Email",
        value: "jaya@victorglobalintl.com"
      },
      {
        icon: PhoneAndroidOutlined,
        label: "Phone",
        value: "(+61) 4 3240 2204"
      }
    ]
  },
  quote: {
    title: "Need A Quote?",
    description: "If you’d like a quote and you have the consignment details ready, head to our quote form and we’ll get back to you with a quote."
  },
  pages: {
    Home: '/',
    About: '/aboutus',
    Services: '/services',
    Contact: '/contactus'
  },
  copyright: '&copy; 2024 Victor Global Pty Ltd. All Rights Reserved.',
  poweredBy: 'Powered By <b>TNXT India Private Limited</b>'
};

export default footerContent;


export { homePageData, servicesData, aboutUsPageData, contactUsPageData, requestQuotePageData, footerContent };
