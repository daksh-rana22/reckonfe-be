DEFAULT_CLIENTS = [
    {"id": "client-1", "name": "Big Maart", "img": "/images/clients/big-mart.jpeg", "city": "Dehradun", "software": "departmental-supermarket"},
    {"id": "client-2", "name": "Momentous Supermarket", "img": "/images/clients/momentous.jpg", "city": "Delhi", "software": "departmental-supermarket"},
    {"id": "client-3", "name": "ENOVOUS", "img": "/images/clients/enovus.jpg", "city": "Mumbai", "software": "fmcg-distributors"},
    {"id": "client-4", "name": "Kiama Herbals", "img": "/images/clients/kiama.jpeg", "city": "Noida", "software": "retail-pharmacies"},
    {"id": "client-5", "name": "Kothilal Dental College", "img": "/images/clients/kothilal.jpg", "city": "Gurugram", "software": "hospital-pharmacies"},
    {"id": "client-6", "name": "Surya Hospital", "img": "/images/clients/surya.jpg", "city": "Haridwar", "software": "hospital-pharmacies"},
    {"id": "client-7", "name": "UNAG Pharma", "img": "/images/clients/unag.jpeg", "city": "Rishikesh", "software": "pharma-distributors"},
    {"id": "client-8", "name": "Shakun Medical Store", "img": "/images/clients/shakun.jpg", "city": "Roorkee", "software": "retail-pharmacies"},
    {"id": "client-9", "name": "Shobhit Mediworld", "img": "/images/clients/shobhit.png", "city": "Haldwani", "software": "pharmacy-ayurvedic"},
    {"id": "client-10", "name": "AyurCentral", "img": "/images/clients/ayurcentral.png", "city": "Nainital", "software": "pharmacy-ayurvedic"},
    {"id": "client-11", "name": "ABC Family Bazar", "img": "/images/clients/abc-bazar.png", "city": "Lucknow", "software": "departmental-supermarket"},
    {"id": "client-12", "name": "SuperValue Pharmacy", "img": "/images/clients/supervalue.jpeg", "city": "Chandigarh", "software": "retail-pharmacies"},
    {"id": "client-13", "name": "Asha Stores", "img": "/images/clients/asha.jpeg", "city": "Pune", "software": "grocery-kirana"},
    {"id": "client-14", "name": "Best Quality Store", "img": "/images/clients/best-quality.jpeg", "city": "Bangalore", "software": "grocery-kirana"},
    {"id": "client-15", "name": "Gicchii Supermarket", "img": "/images/clients/gicchii.jpeg", "city": "Chennai", "software": "departmental-supermarket"},
    {"id": "client-16", "name": "Mittal Medicose", "img": "/images/clients/mittal.jpeg", "city": "Kolkata", "software": "retail-pharmacies"},
    {"id": "client-17", "name": "KnitLife Pharma", "img": "/images/clients/knitlife.jpeg", "city": "Hyderabad", "software": "pharma-distributors"},
    {"id": "client-18", "name": "Bio Bricks", "img": "/images/clients/biobricks.jpg", "city": "Ahmedabad", "software": "spare-parts-dealers"},
    {"id": "client-19", "name": "Noble Remedies", "img": "/images/clients/noble.jpeg", "city": "Jaipur", "software": "retail-pharmacies"},
]

DEFAULT_PARTNERS = [
    {"id": "partner-1", "name": "Reckon Sales Corporation", "img": "/images/clients/abc-bazar.png", "city": "Delhi"},
    {"id": "partner-2", "name": "Vikas Distributors", "img": "/images/clients/big-mart.jpeg", "city": "Mumbai"},
    {"id": "partner-3", "name": "HealthCare Solutions", "img": "/images/clients/momentous.jpg", "city": "Dehradun"},
    {"id": "partner-4", "name": "Kiama Herbals", "img": "/images/clients/kiama.jpeg", "city": "Noida"},
    {"id": "partner-5", "name": "Kothilal Dental College", "img": "/images/clients/kothilal.jpg", "city": "Gurugram"},
]

DEFAULT_DOWNLOAD_CATEGORIES = [
    {"value": "setups", "label": "Software Setups"},
    {"value": "files", "label": "Reckon Files"},
    {"value": "patches", "label": "Cloud Patches"},
]

DEFAULT_DOWNLOADS = [
    # Setups
    { "id": "dl-1", "name": "Reckon Setup", "link": "https://reckonsales.in/downloads/Reckon-Setup.zip", "type": "setups", "desc": "Core Reckon ERP system installer package.", "icon": "Monitor" },
    { "id": "dl-2", "name": "Reckon Standard-GST-2.0 (28.2.2026)", "link": "https://reckonsales.in/downloads/ReckonStandardUpdate-New.zip", "type": "setups", "desc": "Standard business billing and accounting update with GST-2.0 compliance.", "icon": "Monitor" },
    { "id": "dl-3", "name": "Reckon Pharma-GST-2.0 (28.2.2026)", "link": "https://reckonsales.in/downloads/ReckonPharmaUpdate-New.zip", "type": "setups", "desc": "Pharma and Chemist specialized update package with GST-2.0.", "icon": "Monitor" },
    { "id": "dl-4", "name": "Suvidha HIMS Update", "link": "https://reckonsales.in/downloads/Suvidha-HIMS.zip", "type": "setups", "desc": "Hospital Information Management System update.", "icon": "Monitor" },
    { "id": "dl-5", "name": "Suvidha Retail GST 2.0", "link": "https://reckonsales.in/downloads/Suvidha-Retail.zip", "type": "setups", "desc": "Retail POS suvidha edition with latest GST rules.", "icon": "Monitor" },
    { "id": "dl-6", "name": "Suvidha Stockist Update", "link": "https://reckonsales.in/downloads/Suvidha-Stockist.zip", "type": "setups", "desc": "Stockist and distributor management edition update.", "icon": "Monitor" },

    # Files
    { "id": "dl-7", "name": "Reckon Controls", "link": "https://reckonsales.in/downloads/Reckon_Control.zip", "type": "files", "desc": "Required system components and activeX controls.", "icon": "Hammer" },
    { "id": "dl-8", "name": "Reckon Invoice Formats", "link": "https://reckonsales.in/downloads/Reckon_Bill_Format.zip", "type": "files", "desc": "Pre-designed bill and invoice printing templates.", "icon": "FileText" },
    { "id": "dl-9", "name": "Reckon Cheque Formats", "link": "https://reckonsales.in/downloads/Reckon_Cheque_Format.zip", "type": "files", "desc": "Bank cheque layout templates for auto printing.", "icon": "FileText" },

    # Cloud Patches
    { "id": "dl-10", "name": "DEMO.Reckonerp.online", "link": "https://reckonsales.in/downloads/DEMORECKONERPONLINE.zip", "type": "patches", "desc": "Cloud utility patch for Reckon ERP Online demo access.", "icon": "Cloud" },
    { "id": "dl-11", "name": "ERP.Reckonsales.online", "link": "https://reckonsales.in/downloads/ReckonCloud.zip", "type": "patches", "desc": "Primary cloud access synchronization utility.", "icon": "Cloud" },
    { "id": "dl-12", "name": "ERP1.Reckonerp.online", "link": "https://reckonsales.in/downloads/ReckonERPonline.zip", "type": "patches", "desc": "Cloud client utility patch for Server 1.", "icon": "Cloud" },
    { "id": "dl-13", "name": "ERP2.Reckonerp.online", "link": "https://reckonsales.in/downloads/erp2ReckonERPonline.zip", "type": "patches", "desc": "Cloud client utility patch for Server 2.", "icon": "Cloud" },
    { "id": "dl-14", "name": "ERP3.Reckonerp.online", "link": "https://reckonsales.in/downloads/erp3ReckonERPonline.zip", "type": "patches", "desc": "Cloud client utility patch for Server 3.", "icon": "Cloud" },
    { "id": "dl-15", "name": "ERP4.Reckonerp.online", "link": "https://reckonsales.in/downloads/erp4ReckonERPonline.zip", "type": "patches", "desc": "Cloud client utility patch for Server 4.", "icon": "Cloud" },
    { "id": "dl-16", "name": "ERP5.Reckonerp.online", "link": "https://reckonsales.in/downloads/erp5ReckonERPonline.zip", "type": "patches", "desc": "Cloud client utility patch for Server 5.", "icon": "Cloud" },
    { "id": "dl-17", "name": "ERP6.Reckonerp.online", "link": "https://reckonsales.in/downloads/erp6ReckonERPonline.zip", "type": "patches", "desc": "Cloud client utility patch for Server 6.", "icon": "Cloud" },
    { "id": "dl-18", "name": "ERP7.Reckonerp.online", "link": "https://reckonsales.in/downloads/erp7ReckonERPonline.zip", "type": "patches", "desc": "Cloud client utility patch for Server 7.", "icon": "Cloud" },
    { "id": "dl-19", "name": "ERP8.Reckonerp.online", "link": "https://reckonsales.in/downloads/ERP8RECKONERPONLINE.zip", "type": "patches", "desc": "Cloud client utility patch for Server 8.", "icon": "Cloud" },
    { "id": "dl-20", "name": "ERP9.Reckonerp.online", "link": "https://reckonsales.in/downloads/ERP9RECKONERPONLINE.zip", "type": "patches", "desc": "Cloud client utility patch for Server 9.", "icon": "Cloud" },
    { "id": "dl-21", "name": "ERP10.Reckonerp.online", "link": "https://reckonsales.in/downloads/ERP10RECKONERPONLINE.zip", "type": "patches", "desc": "Cloud client utility patch for Server 10.", "icon": "Cloud" },
    { "id": "dl-22", "name": "ERP11.Reckonerp.online", "link": "https://reckonsales.in/downloads/ERP11RECKONERPONLINE.zip", "type": "patches", "desc": "Cloud client utility patch for Server 11.", "icon": "Cloud" },
    { "id": "dl-23", "name": "ERP12.Reckonerp.online", "link": "https://reckonsales.in/downloads/ERP12RECKONERPONLINE.zip", "type": "patches", "desc": "Cloud client utility patch for Server 12.", "icon": "Cloud" },
    { "id": "dl-24", "name": "ERP13.Reckonerp.online", "link": "https://reckonsales.in/downloads/ERP13RECKONERPONLINE.zip", "type": "patches", "desc": "Cloud client utility patch for Server 13.", "icon": "Cloud" },
    { "id": "dl-25", "name": "ERP14.Reckonerp.online", "link": "https://reckonsales.in/downloads/ERP14RECKONERPONLINE.zip", "type": "patches", "desc": "Cloud client utility patch for Server 14.", "icon": "Cloud" },
    { "id": "dl-26", "name": "ERP15.Reckonerp.online", "link": "https://reckonsales.in/downloads/ERP15RECKONERPONLINE.zip", "type": "patches", "desc": "Cloud client utility patch for Server 15.", "icon": "Cloud" },
]

DEFAULT_GALLERY_CATEGORIES = [
    {"value": "award-function", "label": "Award Function"},
    {"value": "gift-distribution", "label": "Gift Distribution"},
    {"value": "presentation", "label": "Presentation"},
]

# Award images
award_nums = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','18','19','20','21','22']
award_default = [
    {
        "id": f"award-{nums}",
        "src": f"https://reckonsales.in/images/gallery/02/{nums}.jpg",
        "category": "award-function",
        "title": f"Award Function — Photo {idx + 1}"
    } for idx, nums in enumerate(award_nums)
]

# Gift images
gift_nums = [2,5,8,11,14,17,20,23,26,29,32,35,38,41,44,47,50,54,58,62,66,70,74,78,82,86,90,95,100,105,110,115,120,125,130,135,140,145,150,155,158,160,162]
gift_default = [
    {"id": "gift-01", "src": "https://reckonsales.in/images/gallery/03/01.jpg", "category": "gift-distribution", "title": "Gift Distribution — Photo 1"},
] + [
    {
        "id": f"gift-{n}",
        "src": f"https://reckonsales.in/images/gallery/03/({n}).jpg",
        "category": "gift-distribution",
        "title": f"Gift Distribution — Photo {n}"
    } for n in gift_nums
]

# Presentation images
presentation_nums = ['01','2','3','4','5','6','7','8','9','11','12']
presentation_default = [
    {
        "id": f"pres-{n}",
        "src": f"https://reckonsales.in/images/gallery/04/{n}.jpg",
        "category": "presentation",
        "title": f"Presentation — Photo {idx + 1}"
    } for idx, n in enumerate(presentation_nums)
]

DEFAULT_GALLERY_ITEMS = award_default + gift_default + presentation_default

DEFAULT_TESTIMONIALS = [
    {
        "id": "testi-1",
        "name": "Rajesh Kumar",
        "designation": "Owner",
        "company": "Kumar Medical Store",
        "industry": "Pharmacy",
        "quote": "Reckon has completely transformed how we manage our pharmacy. The drug expiry tracking and batch management features have saved us lakhs in potential losses.",
        "rating": 5,
    },
    {
        "id": "testi-2",
        "name": "Priya Sharma",
        "designation": "Operations Manager",
        "company": "FreshMart Supermarket",
        "industry": "Retail",
        "quote": "The POS system is incredibly fast and reliable. Our checkout times have reduced by 40% since we switched to Reckon-Mart. The customer is always happy.",
        "rating": 5,
    },
    {
        "id": "testi-3",
        "name": "Amit Verma",
        "designation": "Managing Director",
        "company": "Verma Auto Spares",
        "industry": "Auto Parts",
        "quote": "Managing thousands of auto parts with different vehicle compatibilities was a nightmare before Reckon. Now our team finds any part in seconds.",
        "rating": 5,
    },
    {
        "id": "testi-4",
        "name": "Sunita Agarwal",
        "designation": "Proprietor",
        "company": "Sunita Fashion House",
        "industry": "Garments",
        "quote": "The size and color matrix feature is exactly what our garment business needed. Inventory tracking across variants has never been easier.",
        "rating": 4,
    },
    {
        "id": "testi-5",
        "name": "Mohammad Farhan",
        "designation": "Business Owner",
        "company": "City Electronics",
        "industry": "Home Appliances",
        "quote": "Warranty tracking and service management have reduced our customer complaints significantly. Reckon is an essential part of our business now.",
        "rating": 5,
    },
    {
        "id": "testi-6",
        "name": "Deepak Gupta",
        "designation": "CEO",
        "company": "Gupta Distributors",
        "industry": "FMCG",
        "quote": "Multi-branch synchronization changed the game for us. We now have real-time visibility across all our distribution points. Outstanding support team.",
        "rating": 5,
    },
]

DEFAULT_BANNERS = [
    {
        "id": "ban-5",
        "title": "Reckon SmartScan 2.0 — AI invoice scanning is here",
        "description": "Scan any invoice in under 3 seconds. Auto GST categorisation. Works with 500+ distributors across India.",
        "image_url": "/images/retail_pharmacy_billing.png",
        "sort_order": 0,
        "is_active": True,
        "redirect_path": "/software/retail"
    },
    {
        "id": "ban-1",
        "title": "Reckon Retail POS Billing",
        "description": "Supercharge your retail outlet with the fastest barcode scanning, inventory tracking, and automatic invoice printing.",
        "image_url": "/images/home_pos_showcase.png",
        "sort_order": 1,
        "is_active": True,
        "redirect_path": "/software/retail"
    },
    {
        "id": "ban-2",
        "title": "Pharmacy & Chemist Special Edition",
        "description": "Track drug expiry, batch numbers, schedule-H regulations, and file automatic GST returns seamlessly.",
        "image_url": "/images/retail_pharmacy_billing.png",
        "sort_order": 2,
        "is_active": True,
        "redirect_path": "/software/pharmacy-healthcare"
    },
    {
        "id": "ban-3",
        "title": "FMCG & Wholesale Distribution ERP",
        "description": "Manage bulk orders, credit accounts, salesman route allocations, and multi-branch warehouse synchronization.",
        "image_url": "/images/fmcg_distributor_billing.png",
        "sort_order": 3,
        "is_active": True,
        "redirect_path": "/software/fmcg"
    },
    {
        "id": "ban-4",
        "title": "Auto Parts & Hardware POS",
        "description": "Handle thousands of part numbers, vehicle compatibility filters, hotkey billing, and barcode integration.",
        "image_url": "/images/multi_branch_autoparts_billing.png",
        "sort_order": 4,
        "is_active": True,
        "redirect_path": "/software/auto-parts"
    }
]


