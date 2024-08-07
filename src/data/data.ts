import React from "react";
import { AiFillFileText } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaUsers,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import {
 
  PiBuildingsFill,
  PiCalculatorFill,
  PiCalendarBlankFill,
  PiChartLineFill,
  PiChartLineUpFill,
  PiChatCenteredFill,
  PiChatCircleFill,
  PiCheckCircleFill,
  PiCoinFill,
  PiDesktopFill,
  PiDeviceMobileFill,
  PiEnvelopeFill,
  PiFileFill,
  PiFilePlusFill,
  PiFileTextFill,
  PiGearFill,
  PiHandCoinsFill,
  PiHandshakeFill,
  PiHeadphonesFill,
  PiHeartbeatFill,
  PiLightbulbFilamentFill,
  PiMapPinFill,
  PiMoneyFill,
  PiNotePencilBold,
  PiPhoneCallBold,
  PiPhoneCallFill,
  PiRocketLaunchFill,
  PiSealCheckFill,
  PiStarFill,
  PiTimerFill,
  PiToothFill,
  PiUserFill,

  PiUsersThreeFill,
  PiWalletFill,
  PiWebhooksLogoFill,
  PiWindowsLogoFill,
} from "react-icons/pi";
import { v4 as uuidv4 } from "uuid";

import whyAccupayCard1 from "/images/whyAccoupayCard_1.png";
import whyAccupayCard2 from "/images/whyAccoupayCard_2.png";
import whyAccupayCard3 from "/images/whyAccoupayCard_3.png";


import testimonial1 from "/images/testimonial1.png";
import testimonial2 from "/images/testimonial2.png";
import testimonial3 from "/images/testimonial3.png";
import testimonial4 from "/images/testimonial4.png";
import testimonial5 from "/images/testimonial5.png";
import testimonial6 from "/images/testimonial6.png";
import testimonial7 from "/images/testimonial7.png";
import testimonial8 from "/images/testimonial8.png";

import blogImg1 from "/images/blogImg1.png";
import blogImg2 from "/images/blogImg2.png";
import blogImg3 from "/images/blogImg3.png";

import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { GiKite } from "react-icons/gi";
import { HiCurrencyDollar } from "react-icons/hi2";
import { SlPlane } from "react-icons/sl";

import caseStudyImg1 from "/images/case_study_img1.png";
import caseStudyImg2 from "/images/case_study_img2.png";
import caseStudyImg3 from "/images/case_study_img3.png";
import caseStudyImg4 from "/images/case_study_img4.png";
import caseStudyImg5 from "/images/case_study_img5.png";
import caseStudyImg6 from "/images/case_study_img6.png";

import teamPic1 from "/images/team_image1.png";
import teamPic2 from "/images/team_image2.png";
import teamPic3 from "/images/team_image3.png";
import teamPic4 from "/images/team_image4.png";
import teamPic5 from "/images/team_image5.png";
import teamPic6 from "/images/team_image6.png";

import productImg1 from "/images/produc_Img1.png";
import productImg2 from "/images/produc_Img2.png";
import productImg3 from "/images/produc_Img3.png";
import productImg4 from "/images/produc_Img4.png";
import productImg5 from "/images/produc_Img5.png";
import productImg6 from "/images/produc_Img6.png";

import blogPageImg1 from "/images/blog_img1.png";
import blogPageImg2 from "/images/blog_img2.png";
import blogPageImg3 from "/images/blog_img3.png";
import blogPageImg4 from "/images/blog_img4.png";
import blogPageImg5 from "/images/blog_img5.png";
import blogPageImg6 from "/images/blog_img6.png";

import recentPostImg1 from "/images/recent_post_img1.png";
import recentPostImg3 from "/images/recent_post_img3.png";
import recentPostImg4 from "/images/recent_post_img4.png";

export const headerMenu = [
  {
    id: uuidv4(),
    name: "Home",
    link: "/",
    isSubmenu: false,
  },
  {
    id: uuidv4(),
    name: "About Us",
    link: "/about",
    isSubmenu: false,
  },


 

  // {
  //   id: uuidv4(),
  //   name: "About Us",
  //   link:"/about",
  //   isSubmenu: false,
  //   submenu: [
  //     {
  //       id: uuidv4(),
  //       name: "Blog Page",
  //       link: "/blog",
  //     },

  //     {
  //       id: uuidv4(),
  //       name: "Blog Details",
  //       link: "/blog-details",
  //     },
  //   ],
  // },
  {
    id: uuidv4(),
    name: " Our Services",
    link:"/services",
    isSubmenu: false,
    submenu: [
      {
        id: uuidv4(),
        name: "All Services",
        link: "/services",
      },
      {
        id: uuidv4(),
        name: "Payroll Processing",
        link: "/services/payroll-processing",
      },
      {
        id: uuidv4(),
        name: "Accounting Services",
        link: "/services/accounting-services",
      },
      {
        id: uuidv4(),
        name: "Taxation Services",
        link: "/services/taxation-services",
      },
      {
        id: uuidv4(),
        name: "Real State Services",
        link: "/services/real-state-services",
      },
      {
        id: uuidv4(),
        name: "Healthcare Services",
        link: "/services/healthcare-services",
      },
      {
        id: uuidv4(),
        name: "Dentist Services",
        link: "/services/dentist-services",
      },
    ],
  },

  {
    id: uuidv4(),
    name: "Contact Us",
    link: "/contact",
    isSubmenu: false,
  },


];

export const socialLinks = [
  {
    id: uuidv4(),
    name: "Facebook",
    link: "#",
    icon: React.createElement(FaFacebookF),
  },
  {
    id: uuidv4(),
    name: "Twitter",
    link: "#",
    icon: React.createElement(FaXTwitter),
  },
  {
    id: uuidv4(),
    name: "Linkedin",
    link: "#",
    icon: React.createElement(FaLinkedinIn),
  },
  {
    id: uuidv4(),
    name: "Instagram",
    link: "#",
    icon: React.createElement(FaInstagram),
  },
];

export const footerLinks = [
  {
    id: uuidv4(),
    name: "Resources",
    links: [
      {
        id: uuidv4(),
        name: "Home",
        link: "/",
      },
      {
        id: uuidv4(),
        name: "About",
        link: "/about",
      },

      {
        id: uuidv4(),
        name: "Blog",
        link: "/blog",
      },
      {
        id: uuidv4(),
        name: "Contact Us",
        link: "/contact",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Services",
    links: [
      {
        id: uuidv4(),
        name: "Business Plans",
        link: "/services/accounting-services",
      },
      {
        id: uuidv4(),
        name: "SWOT Analysis",
        link: "/services/taxation-services",
      },
      {
        id: uuidv4(),
        name: "Website Hosting",
        link: "/services/healthcare-services",
      },
      {
        id: uuidv4(),
        name: "Content Creation",
        link: "/services/dentist-services",
      },
    ],
  },
];

export const getInTouch = [
  {
    id: uuidv4(),
    name: "Get In Touch",
    links: [
      {
        id: uuidv4(),
        name: "Support@blackbottomconsulting.com",
        link: "mailto:Support@blackbottomconsulting.com",
        isLink: true,
        icon: React.createElement(MdOutlineEmail),
      },
      {
        id: uuidv4(),
        name: "(+1) 800-990-8065",
        isLink: true,
        link: "tel:(+1) 800-990-8065",
        icon: React.createElement(PiPhoneCallBold),
      },
      {
        id: uuidv4(),
        name: "10610 Shoemaker St Detroit MI 48213 ",
        isLink: false,
        icon: React.createElement(MdOutlineLocationOn),
      },
    ],
  },
];

export const teamContactDetails = [
  {
    id: uuidv4(),
    name: "example@mail.com",
    link: "mailto:example@mail.com",
    icon: React.createElement(PiEnvelopeFill),
  },
  {
    id: uuidv4(),
    name: "(000) 123 456 789",
    link: "tel:(000) 123 456 789",
    icon: React.createElement(PiPhoneCallFill),
  },
  {
    id: uuidv4(),
    name: "10610 Shoemaker St Detroit MI 48213",
    link: "",
    icon: React.createElement(PiMapPinFill),
  },
];

export const solutionsFeatures = [
  {
    id: uuidv4(),
    name: "Preferred Stock Certificates    ",
    icon: React.createElement(AiFillFileText),
  },
  {
    id: uuidv4(),
    name: "Membership Certificates (LLCs)    ",
    icon: React.createElement(PiHandCoinsFill),
  },
  {
    id: uuidv4(),
    name: "Bonds or Debt Instruments ",
    icon: React.createElement(PiLightbulbFilamentFill),
  },
 
  {
    id: uuidv4(),
    name: "Investment Agreement",
    icon: React.createElement(PiRocketLaunchFill),
  },
  {
    id: uuidv4(),
    name: "Regulatory Compliance Documentation    ",
    icon: React.createElement(PiRocketLaunchFill),
  },
];

export const featuresCard = [
  {
    id: uuidv4(),
    icon: React.createElement(FaUsers),
    name: "Market Opportunity",
    desc: "1. Market size and potential for your product or service.",
    desc1: "2. Target audience and customer demographics.",
    desc2: "3. Recent market trends or changes",
  },
  {
    id: uuidv4(),
    icon: React.createElement(FaUsers),
    name: "Problem Statement    ",
    desc: "1. Define the problem or need that your product or service addresses.",
    desc1: "2. Use statistics or real-life examples to illustrate the severity of the problem.",
    desc2: "3. Recent market trends or changes",
  },
  {
    id: uuidv4(),
    icon: React.createElement(FaUsers),
    name: "Competitive Analysis    ",
    desc: "1. Identify your main competitors.",
    desc1: "2. Highlight your competitive advantage.",
    desc2: "3. Market barriers or entry challenges.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(FaUsers),
    name: "Solution and Value Proposition    ",
    desc: "1. Market size and potential for your product or service.",
    desc1: "2. Target audience and customer demographics.",
    desc2: "3. Recent market trends or changes",
  },
  {
    id: uuidv4(),
    icon: React.createElement(FaUsers),
    name: "Financials    ",
    desc: "1. Present financial projections for the next 3-5 years.",
    desc1: "2. Include revenue, expenses, and profit margins.",
    desc2: "3. Explain your revenue model and pricing strategy.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(FaUsers),
    name: "Traction & Milestones    ",
    desc: "1. Showcase any existing customer base, partnerships, or significant achievements.",
    desc1: "2. Include data on revenue, growth rates, and user adoption.",
    desc2: "3. Key milestones reached and future goals.",
  },
 

 
];

export const stepByStepCard = [
  {
    id: uuidv4(),
    title: "Long-term growth investments",
    desc: "We focus on investing in companies with significant growth potential over an extended period, generating substantial returns.",
    icon: React.createElement(PiFilePlusFill),
  },
  {
    id: uuidv4(),
    title: "Diversification across asset classes",
    desc: "We employ a diversified investment approach, spreading investments across different asset classes to minimize risk and maximize returns.",
    icon: React.createElement(PiUserFill),
  },
  {
    id: uuidv4(),
    title: "Active portfolio management",
    desc: "Our experienced team actively manages portfolios, regularly assessing and adjusting investments to optimize returns.",
    icon: React.createElement(PiHandCoinsFill),
  },
];

export const whyAccupayCard = [
  {
    id: uuidv4(),
    img: whyAccupayCard1,
    title: "Efficient Digital Processes",
    desc:"Streamline your operations with our digitized solutions, from online invoicing to content creation and website hosting, saving you time and resources."
  },
  {
    id: uuidv4(),
    img: whyAccupayCard2,
    title: "Comprehensive Market Analytics",
    desc:"Benefit from our detailed market research and data-driven insights, enabling you to make informed decisions at every stage of your business journey."
  },
  {
    id: uuidv4(),
    img: whyAccupayCard3,
    title: "Tailored Funding Strategies",
    desc:"We understand that one size does not fit all. Benefit from our customized funding strategies designed to maximize your business's funding potential."
  },
 
];

export const faqs = [
  {
    id: uuidv4(),
    question: "What services does AccuPay offer?",
    answer:
      "AccuPay offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions.",
  },
  {
    id: uuidv4(),
    question: "How does the accounting process work?",
    answer:
      "AccuPay offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions.",
  },
  {
    id: uuidv4(),
    question: "Can AccuPay handle international payroll?",
    answer:
      "AccuPay offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions.",
  },
  {
    id: uuidv4(),
    question: "How quickly can services be initiated?",
    answer:
      "AccuPay offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions.",
  },
  {
    id: uuidv4(),
    question: "How do I get in touch with AccuPay's?",
    answer:
      "AccuPay offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions.",
  },
];

export const testimonials = [
  {
    id: uuidv4(),
    img: testimonial1,
    name: "Evelyn Alexander",
    designation: "Small Business Owner",
    review:
      "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
  },
  {
    id: uuidv4(),
    img: testimonial2,
    name: "Hunter Romero",
    designation: "HR Manager",
    review:
      "AccuPay's personalized service has been a game-changer for my small business. Efficient payroll processing.",
  },
  {
    id: uuidv4(),
    img: testimonial3,
    name: "Ora Wong",
    designation: "Finance Director",
    review:
      "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
  },
  {
    id: uuidv4(),
    img: testimonial4,
    name: "Terry Cruz",
    designation: "CEO, Tech Innovations",
    review:
      "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
  },
  {
    id: uuidv4(),
    img: testimonial5,
    name: "Sarah McKinney",
    designation: "Restaurant Owner",
    review:
      "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
  },
  {
    id: uuidv4(),
    img: testimonial6,
    name: "Marguerite Potter",
    designation: "CEO, Tech Innovations",
    review:
      "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
  },
  {
    id: uuidv4(),
    img: testimonial7,
    name: "Isabelle McKinney",
    designation: "Product Manager",
    review:
      "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
  },
  {
    id: uuidv4(),
    img: testimonial8,
    name: "Amy Gutierrez",
    designation: "CFO, Solutions",
    review:
      "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
  },
];

export const pricing = [
  {
    id: uuidv4(),
    icon: React.createElement(GiKite),
    planName: "Basic Plan",
    desc: "Hire employees in 100+ countries where you don't have entities",
    isPopular: false,
    monthlyPrice: "10",
    features: [
      "Accurate and Timely",
      "Basic Financial Records",
      "Starting at $X per month",
    ],
  },
  {
    id: uuidv4(),
    icon: React.createElement(SlPlane),
    planName: "Standard Plan",
    desc: "All packages come with [mention any additional benefits, features, ",
    isPopular: true,
    monthlyPrice: "20",
    features: ["Payroll Processing", "Full Bookkeeping", "Tax Preparation"],
  },
  {
    id: uuidv4(),
    icon: React.createElement(BsFillRocketTakeoffFill),
    planName: "Premium Plan",
    desc: "Explore our case studies to see how businesses like yours have benefited",
    isPopular: false,
    monthlyPrice: "40",
    features: ["Full Bookkeeping", "Tax Preparation", "Financial Advisory"],
  },
];

export const blogSection = [
  {
    id: uuidv4(),
    date: "Jan 15",
    title: "Streamlining Year-End Financial Reporting",
    img: blogImg1,
    desc: "Explore essential factors to consider when selecting payroll processing services. From compliance expertise ",
    category: "Taxation",
  },
  {
    id: uuidv4(),
    date: "Jan 16",
    title: "Best Practices for Employee Expense Management",
    img: blogImg2,
    desc: "Discover how technology is reshaping modern accounting practices. From automation to cloud-based solutions,",
    category: "Processing",
  },
  {
    id: uuidv4(),
    date: "Jan 1",
    title: "The Evolution of Cloud-Based Accounting Solutions",
    img: blogImg3,
    desc: "Identify and prevent common accounting mistakes with our insightful guide. Learn practical strategies.",
    category: "Taxation",
  },
];

export const contactCard = [
 
  {
    id: uuidv4(),
    icon: React.createElement(PiDesktopFill),
    title: "Explore The Demo",
    desc: "Curious about our services? Request a demo to experience firsthand",
    linkText: "See Demo",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHeadphonesFill),
    title: "Give Us a Ring ",
    desc: "Monday through Friday from 6AM - 6PM MST ",
    linkText: "Call Us",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiChatCenteredFill),
    title: "Help Center",
    desc: "Looking for answers? Visit our Help Center for detailed guides",
    linkText: "Help Center",
  },
];

export const integrationsCard = [
  {
    id: uuidv4(),
    icon: React.createElement(HiCurrencyDollar),
    title: "Investment Amount",
    desc:"Clearly state the amount of investment you are proposing."
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiMoneyFill),
    title: "Terms",
    desc:"Brief overview of the terms of the investment, such as equity stake, convertible note, or preferred shares."
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Purpose",
    desc:"Explain the intended use of the investment funds, such as product development, market expansion, or scaling operations."
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiTimerFill),
    title: "Timeline",
    desc:"Mention the expected timeline for the investment, including closing and disbursement of funds."
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHandshakeFill),
    title: "Benefits",
    desc:"Highlight the potential benefits of the investment for both parties, focusing on mutual growth and strategic alignment."
  },
];

export const storyData = [
 
  {
    id: uuidv4(),
    title: "Our Mission",
    desc: "Our mission is clear: to provide businesses with the tools, strategies, and support they need to thrive in a competitive world. We believe in the power of knowledge, and we use our expertise to guide businesses towards informed decisions, strategic growth, and financial prosperity.",
  },
  {
    id: uuidv4(),
    title: "Our Vision",
    desc: "Our vision is to be the catalyst for positive change in the business world. We aim to be the driving force behind your business's success story, helping you reach new heights, overcome challenges, and seize opportunities in the ever-evolving marketplace..",
  },
  {
    id: uuidv4(),
    title: "Expert Team",
    desc: "At Black Bottom Consulting LLC, our expert team comprises seasoned professionals dedicated to empowering businesses to thrive in today's dynamic marketplace. With a wealth of experience and a commitment to excellence, our consultants bring a diverse range of expertise to the table",
  },
];

export const ourValues = [
  {
    id: uuidv4(),
    icon: React.createElement(PiHandshakeFill),
    title: "Years of Experience",
    desc: "Proven track record in the investment industry",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiCheckCircleFill),
    title: "Diverse Investment Portfolio",
    desc: "Investing in a wide range of industries and sectors",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Impressive ROI",
    desc: "Consistently delivering high returns for our clients",
  },
 
];

export const awardsData = [
  {
    id: uuidv4(),
    name: "Awwwards SOTD",
    desc: "FOR DISPLAY 2022",
  },
  {
    id: uuidv4(),
    name: "Wix.com",
    desc: "INTERVIEW 2021",
  },
  {
    id: uuidv4(),
    name: "CSS Awards",
    desc: "FEATURE 2020",
  },
  {
    id: uuidv4(),
    name: "Muzli",
    desc: "FEATURE 2020",
  },
  {
    id: uuidv4(),
    name: "Awwwards",
    desc: "FOR MUTEZA 2019",
  },
  {
    id: uuidv4(),
    name: "Chapters Studio",
    desc: "FOR DISPLAY 2018",
  },
];

export const coreServices = [
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    title: "Fundraising & Capital Acquisition",
 
    desc: "We specialize in raising the necessary funds to fuel your business growth. From preparing compelling pitch decks to negotiating term sheets, we guide you through every step. Whether through venture capital, private equity, angel investors, or crowdfunding, we've got you covered.    ",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHandCoinsFill),
    title: "Financial Analysis & Due Diligence",
   
    desc: "Our team provides comprehensive financial analysis and due diligence services. We assess the financial health and viability of your business through a thorough review of financial state ments, market trends, and industry benchmarks. Gain valuable insights to make informed funding decisions. ",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiFileFill),
    title: "Investor Relations & Communications ",
    desc: "We understand the importance of effective communication with investors. Our team will help you develop investor relations strategies, craft compelling investor presentations, and facilitate investor meetings and roadshows. Build strong relationships and resonate with potential investors.    ",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiBuildingsFill),
    title: "Business Valuation & Financial Modeling",
    desc: "Our financial experts conduct rigorous business valuation exercises to determine the fair value of your company. We use advanced financial modeling techniques to create accurate projections and scenarios. Present a compelling investment case to potential investors with our expertise. ",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHeartbeatFill),
    title: "Pitch Deck & Business Plan Development",
    desc: "Collaborate with us to develop a persuasive pitch deck and business plan. We showcase your unique value proposition, market opportunity, and growth potential. Articulate your vision and differentiate your business from competitors, increasing your chances of securing funding. ",
   
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiToothFill),
    title: "Strategic Partnerships & Alliances",
    desc: "We assist you in identifying strategic partners and alliances that provide financial support and access to new markets, technologies, or distribution channels. Our extensive network of industry contacts allows us to connect you with partners who can contribute to your business's growth. ",
  },
];

export const whatWeDo = [
  {
    id: uuidv4(),
    title: "Limit Personal Lability    ",
  
  },
  {
    id: uuidv4(),
    title: "Minimize Taxes",
   
  },
  {
    id: uuidv4(),
    title: "Centralized Management",
   
  },
  {
    id: uuidv4(),
    title: "Continuity of Business ",
   
  },
  {
    id: uuidv4(),
    title: "Continuity of Business ",
   
  },
];

export const accountingServices = [
  {
    id: uuidv4(),
    title: "Bookkeeping",
    desc: "Maintain precise and up-to-date records with our professional bookkeeping services. ",
    icon: React.createElement(PiCalculatorFill),
  },
  {
    id: uuidv4(),
    title: "Financial Reporting",
    desc: "Gain valuable insights into your business's performance with our detailed financial reporting.",
    icon: React.createElement(PiFileTextFill),
  },
  {
    id: uuidv4(),
    title: "Tax Planning",
    desc: "Stay tax-compliant and maximize your savings with our expert tax planning services. ",
    icon: React.createElement(PiMoneyFill),
  },
  {
    id: uuidv4(),
    title: "Financial Analysis",
    desc: "Harness the power of data with our financial analysis services. We interpret financial trends, ",
    icon: React.createElement(PiChartLineUpFill),
  },
];

export const neverWorry = [
  {
    id: uuidv4(),
    title: "Great Communication",
    desc: "We resolve issues and offer advice quickly.",
    icon: React.createElement(PiChatCircleFill),
  },

  {
    id: uuidv4(),
    title: "Growth Potential",
    desc: "We proactively offer growth and profitability advice",
    icon: React.createElement(PiChartLineUpFill),
  },
  {
    id: uuidv4(),
    title: "Stay in Compliance",
    desc: "Your dedicated expert knows your business inside and out.",
    icon: React.createElement(PiNotePencilBold),
  },
];

export const accountantFeatures = [
  {
    id: uuidv4(),
    title: "Communication issues.",
    desc: "Plus, accountants often charge by the minute.",
  },
  {
    id: uuidv4(),
    title: "Shrinking business.",
    desc: "There's no such thing as staying the same; you're either growing or you're shrinking.",
  },
  {
    id: uuidv4(),
    title: "Compliance and customer service problems.",
    desc: "National providers are known for mistakes and poor issue resolution.",
  },
];

export const taxationFeatures = [
  {
    id: uuidv4(),
    title: "Tax Preparation and Filing",
    desc: "Ensure a seamless tax season with our expert tax preparation services. We handle all necessary documentation and filing requirements,",
    icon: React.createElement(PiCoinFill),
  },
  {
    id: uuidv4(),
    title: "Strategic Tax Planning",
    desc: "Plan for the future with our strategic tax planning services. We help optimize your financial decisions to maximize savings and minimize potential risks.",
    icon: React.createElement(PiHandCoinsFill),
  },
  {
    id: uuidv4(),
    title: "Compliance Assurance",
    desc: "Stay compliant with ever-changing tax regulations. Our team stays abreast of updates, ensuring your business adheres to all relevant tax laws",
    icon: React.createElement(PiSealCheckFill),
  },
  {
    id: uuidv4(),
    title: "Audit Support",
    desc: "In the event of an audit, our experienced team provides support, helping you navigate the process efficiently and effectively.",
    icon: React.createElement(PiHeadphonesFill),
  },
];

export const whtaWeDoTaxationData = [
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    title: "Digital Solutions & Automation ",
    desc: "Streamline your operations with our digital solutions and automation services. From process automation to implementing digitized solutions, we optimize your business processes. Save time and resources while improving efficiency and productivity.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Financial Risk Management ",
    desc: "Our risk management experts help you assess and mitigate financial risks associated with your business. We identify potential risks, develop risk mitigation strategies, and establish financial controls. Safeguard your investments and ensure long-term sustainability with our support. ",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiLightbulbFilamentFill),
    title: "Market Research and Analysis  ",
    desc: "Benefit from our in-depth market research and competitor analysis. We provide data-driven insights to help you make informed decisions. Stay ahead of market trends and gain a competitive edge with our comprehensive market analytics. ",
  },
];

export const realStateFeatures = [
  {
    id: uuidv4(),
    icon: React.createElement(PiBuildingsFill),
    title: "Property Management",
    desc: "Effortlessly manage your properties with our professional property management services. From tenant relations to maintenance, ",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHandCoinsFill),
    title: "Investment Analysis",
    desc: "Make informed investment decisions with our detailed investment analysis. Our experts assess potential properties and provide insights to guide",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHandshakeFill),
    title: "Real Estate Transactions",
    desc: "Navigate real estate transactions with confidence. Our team facilitates smooth buying, selling, or leasing processes,",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    title: "Lease Administration",
    desc: "Streamline lease management with our lease administration services. We handle documentation, renewals,",
  },
];

export const servicesFeatures = [
  {
    id: uuidv4(),
    icon: React.createElement(PiMoneyFill),
    title: "Commissions Made Easy",
    desc: "Whether admin or agent, employee or contractor, run unlimited payrolls for your team in just a few clicks.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiTimerFill),
    title: "Time-Saving Workflows",
    desc: "Employees can access earnings, check their paystubs, and add expenses, at the office or on the go.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiStarFill),
    title: "Worry-free work",
    desc: "Never stress about late or incorrect payments again. With Gusto, payroll is accurate, efficient.",
  },
];

export const healthCareFeatures = [
  {
    id: uuidv4(),
    icon: React.createElement(PiHandCoinsFill),
    title: "Payroll for Healthcare Professionals",
    desc: "Efficient payroll processing tailored to the unique needs of healthcare professionals. Ensure accurate and timely compensation",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiGearFill),
    title: "Compliance Management",
    desc: "Stay compliant with ever-evolving healthcare regulations. Our services include compliance management to ensure your practice",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHeartbeatFill),
    title: "Financial Advisory for Healthcare Practices",
    desc: "Navigate the financial landscape of healthcare with our expert advisory services. From budgeting to strategic planning,",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Healthcare Consulting",
    desc: "Receive personalized consulting services to address the unique challenges of your healthcare practice.",
  },
];

export const manageHealthItems = [
  {
    id: uuidv4(),
    icon: React.createElement(PiDeviceMobileFill),
    title: "Service & Payments",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiTimerFill),
    title: "Terms of Contract Termination ",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiWalletFill),
    title: "Notice & Renewal",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiChartLineFill),
    title: "Delivering Consistent Results ",
  },
];

export const dentistSectionFeatures = [
  {
    id: uuidv4(),
    icon: React.createElement(PiToothFill),
    title: "Payroll for Dental Professionals",
    desc: "Accurate and efficient payroll processing tailored to meet the unique needs of dental professionals. Ensure your dedicated team",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Compliance Management",
    desc: "Stay compliant with the ever-evolving regulations in the dental industry. Our services include compliance management",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    title: "Financial Advisory for Dental Practices",
    desc: "Navigate the financial landscape of dental care with our expert advisory services. From budgeting to strategic planning,",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Dental Consulting",
    desc: "Receive personalized consulting services to address the unique challenges of your dental practice.",
  },
];

export const whyCooseUs = [
  {
    id: uuidv4(),
    icon: React.createElement(PiToothFill),
    title: "Dental Industry Expertise",
    desc: "Our team understands the specific needs and challenges of the dental industry, providing tailored solutions.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHeadphonesFill),
    title: "Financial Support",
    desc: "Beyond payroll, we offer a range of financial services to support the overall health of your dental practice.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiWebhooksLogoFill),
    title: "Technology Integration",
    desc: "Stay ahead with technology-driven solutions that enhance efficiency and compliance in the dental care sector.",
  },
];

export const caseStudies = [
  {
    id: uuidv4(),
    img: caseStudyImg1,
    name: "Tax Compliance Simple",
  },
  {
    id: uuidv4(),
    img: caseStudyImg2,
    name: "Automated Payroll Success",
  },
  {
    id: uuidv4(),
    img: caseStudyImg3,
    name: "A Payroll Case Study",
  },
  {
    id: uuidv4(),
    img: caseStudyImg4,
    name: "Payroll Income Business",
  },
  {
    id: uuidv4(),
    img: caseStudyImg5,
    name: "Accounting Success",
  },
  {
    id: uuidv4(),
    img: caseStudyImg6,
    name: "Payroll Outsourcing Center",
  },
];

export const teamList = [
  {
    id: uuidv4(),
    name: "Bess Collins",
    designation: "Web Designer",
    img: teamPic1,
  },
  {
    id: uuidv4(),
    name: "Micheal James",
    designation: "Accountant",
    img: teamPic2,
  },
  {
    id: uuidv4(),
    name: "Dean Obrien",
    designation: "Tax Specialist",
    img: teamPic3,
  },
  {
    id: uuidv4(),
    name: "Maggie Clark",
    designation: "Manager",
    img: teamPic4,
  },
  {
    id: uuidv4(),
    name: "Rosalie Chapman",
    designation: "Product Manager",
    img: teamPic5,
  },
  {
    id: uuidv4(),
    name: "Verna Gutierrez",
    designation: "CEO, Accupay",
    img: teamPic6,
  },
];

export const caseStudySidebar = [
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    name: "Client",
    desc: "David Warner",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiCalendarBlankFill),
    name: "Date",
    desc: "15 - January - 2024",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiWindowsLogoFill),
    name: "Category",
    desc: "Payroll Processing",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiMapPinFill),
    name: "Location",
    desc: "Garuda, 99 INA",
  },
];

export const teamSkills = [
  {
    id: uuidv4(),
    name: "Web Design",
    percentage: 70,
  },
  {
    id: uuidv4(),
    name: "Mobile App Design",
    percentage: 80,
  },
  {
    id: uuidv4(),
    name: "UI/UX Design",
    percentage: 85,
  },
];

export const shopPage = [
  {
    id: uuidv4(),
    img: productImg1,
    name: "Accounting Software",
    price: "756",
  },
  {
    id: uuidv4(),
    img: productImg2,
    name: "Online Courses",
    price: "637",
  },
  {
    id: uuidv4(),
    img: productImg3,
    name: "Payroll Processing Tools",
    price: "948",
  },
  {
    id: uuidv4(),
    img: productImg4,
    name: "Educational Resources",
    price: "402",
  },
  {
    id: uuidv4(),
    img: productImg5,
    name: "Templates and Forms",
    price: "782",
  },
  {
    id: uuidv4(),
    img: productImg6,
    name: "Tax Compliance",
    price: "573",
  },
];

export const blogList = [
  {
    id: uuidv4(),
    title: "The Evolution of Cloud-Based Accounting Solutions",
    img: blogPageImg1,
    date: "Jan 15",
    tag: "Accounting",
    desc: "Explore the transformative effects of remote work on payroll processing.",
  },
  {
    id: uuidv4(),
    title: "Best Practices for Employee Expense Management",
    img: blogPageImg2,
    date: "Jan 16",
    tag: "Payroll Processing",
    desc: "Explore comprehensive strategies to fortify data security in your accounting operations. ",
  },
  {
    id: uuidv4(),
    title: "Payroll Outsourcing vs. In-House Processing",
    img: blogPageImg3,
    date: "Jan 14",
    tag: "Remote Work",
    desc: "Explore the transformative effects of remote work on payroll processing.",
  },
  {
    id: uuidv4(),
    title: "Streamlining Year-End Financial Reporting",
    img: blogPageImg4,
    date: "Jan 19",
    tag: "Software",
    desc: "Uncover the pros and cons of payroll outsourcing and in-house processing. Delve into cost considerations,",
  },
  {
    id: uuidv4(),
    title: "Ensuring Data Security in Your Accounting Practices",
    img: blogPageImg5,
    date: "Jan 25",
    tag: "Taxation",
    desc: "Discover expert strategies for optimizing employee expense management.",
  },
  {
    id: uuidv4(),
    title: "The Impact of Remote Work on Payroll Processing.",
    img: blogPageImg6,
    date: "Jan 13",
    tag: "Planning",
    desc: "Embark on a journey through the transformative growth of cloud-based accounting solutions.",
  },
];

export const blogCategories = [
  {
    id: uuidv4(),
    name: "Accounting",
    count: "6",
  },
  {
    id: uuidv4(),
    name: "Business",
    count: "4",
  },
  {
    id: uuidv4(),
    name: "Finance",
    count: "8",
  },
  {
    id: uuidv4(),
    name: "Invest",
    count: "3",
  },
  {
    id: uuidv4(),
    name: "Payroll Processing",
    count: "2",
  },
  {
    id: uuidv4(),
    name: "Taxation",
    count: "5",
  },
];

export const recentPost = [
  {
    id: uuidv4(),
    img: recentPostImg1,
    date: "December 15",
    title: "Learn About Payroll Processing Essentials",
  },
  {
    id: uuidv4(),
    img: recentPostImg1,
    date: "December 10",
    title: "Financial Management Strategies People Use",
  },
  {
    id: uuidv4(),
    img: recentPostImg3,
    date: "December 8",
    title: "Recent Industry News and Updates",
  },
  {
    id: uuidv4(),
    img: recentPostImg4,
    date: "December 20",
    title: "Innovations in Accounting Software",
  },
];

export const contactPageCard = [
  {
    id: uuidv4(),
    icon: React.createElement(PiEnvelopeFill),
    name: "Chat to Expert",
    linkText: "Support@blackbottomconsulting.com",
    link: "mailto:Support@blackbottomconsulting.com",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiPhoneCallFill),
    name: "Contact Us",
    linkText: "(+1) 800-990-8065 ",
    link: "tel:(+1) 800-990-8065",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiMapPinFill),
    name: "Visit Our Office",
    address: "10610 Shoemaker St Detroit MI 48213",
  },
];

export const blogTags = [
  {
    id: uuidv4(),
    name: "Payroll",
  },
  {
    id: uuidv4(),
    name: "Software",
  },
  {
    id: uuidv4(),
    name: "Accounting",
  },
  {
    id: uuidv4(),
    name: "Solutions",
  },
  {
    id: uuidv4(),
    name: "Planning",
  },
  {
    id: uuidv4(),
    name: "Finance",
  },
  {
    id: uuidv4(),
    name: "Tax",
  },
];
