-- PostgreSQL Schema and Seed Data for Reckon Sales Admin Portal
-- Excludes any separate dashboard tables or complex tasks, focusing strictly on required persistent schemas.

-- 1. CLEANUP (Drop tables if they exist)
DROP TABLE IF EXISTS banner_settings CASCADE;
DROP TABLE IF EXISTS banners CASCADE;
DROP TABLE IF EXISTS testimonials CASCADE;
DROP TABLE IF EXISTS gallery_items CASCADE;
DROP TABLE IF EXISTS gallery_categories CASCADE;
DROP TABLE IF EXISTS downloads CASCADE;
DROP TABLE IF EXISTS download_categories CASCADE;
DROP TABLE IF EXISTS client_logos CASCADE;
DROP TABLE IF EXISTS branding_logo CASCADE;
DROP TABLE IF EXISTS refresh_tokens CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- 2. CREATE SCHEMAS & TABLES

-- User Accounts (Optional / Legacy Auth Table)
CREATE TABLE users (
    id VARCHAR(50) PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'user' NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Branding (Logo Url)
CREATE TABLE branding_logo (
    id VARCHAR(50) PRIMARY KEY,
    logo_url VARCHAR(500) DEFAULT '/images/logo.png' NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Client & Partner Logos
CREATE TABLE client_logos (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    img VARCHAR(500) NOT NULL,
    city VARCHAR(100),
    software VARCHAR(100) DEFAULT 'all',
    type VARCHAR(20) DEFAULT 'client' NOT NULL, -- 'client' or 'partner'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Download Categories
CREATE TABLE download_categories (
    id VARCHAR(50) PRIMARY KEY,
    value VARCHAR(50) UNIQUE NOT NULL,
    label VARCHAR(100) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Download Files & URLs
CREATE TABLE downloads (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    "desc" VARCHAR(500),
    link VARCHAR(500) NOT NULL,
    type VARCHAR(50) REFERENCES download_categories(value) ON DELETE CASCADE NOT NULL,
    icon VARCHAR(50) DEFAULT 'Monitor' NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Gallery Categories
CREATE TABLE gallery_categories (
    id VARCHAR(50) PRIMARY KEY,
    value VARCHAR(50) UNIQUE NOT NULL,
    label VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Gallery Media Items
CREATE TABLE gallery_items (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    img VARCHAR(500) NOT NULL,
    category VARCHAR(50) REFERENCES gallery_categories(value) ON DELETE CASCADE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Testimonials & Reviews
CREATE TABLE testimonials (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    designation VARCHAR(100) NOT NULL,
    company VARCHAR(100) NOT NULL,
    industry VARCHAR(100) NOT NULL, -- Stores software slug or category
    quote VARCHAR(1000) NOT NULL,
    rating INTEGER DEFAULT 5 NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Sliding Homepage Banners
CREATE TABLE banners (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(500),
    image_url VARCHAR(500) NOT NULL,
    link_url VARCHAR(200),
    sort_order INTEGER DEFAULT 0 NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    redirect_path VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Banner Settings (Global Configs)
CREATE TABLE banner_settings (
    id VARCHAR(50) PRIMARY KEY,
    slide_duration INTEGER DEFAULT 5 NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);


-- 3. SEED INITIAL DEFAULTS DATA

-- Seed Admin User (password: admin, hash for testing)
INSERT INTO users (id, full_name, username, hashed_password, role, is_active)
VALUES ('user-admin', 'admin', 'admin', '$2b$12$6KxG3U09eO95/Lz74Z3KHe63U09eO95/Lz74Z3KHe63U09eO95/Lz', 'admin', TRUE);

-- Seed Default Logo
INSERT INTO branding_logo (id, logo_url)
VALUES ('logo-default', '/images/logo.png');

-- Seed Default Banners Duration setting
INSERT INTO banner_settings (id, slide_duration)
VALUES ('duration-default', 5);

-- Seed Default Client Logos
INSERT INTO client_logos (id, name, img, city, software, type) VALUES
('client-1', 'Big Maart', '/images/clients/big-mart.jpeg', 'Dehradun', 'departmental-supermarket', 'client'),
('client-2', 'Momentous Supermarket', '/images/clients/momentous.jpg', 'Delhi', 'departmental-supermarket', 'client'),
('client-3', 'ENOVOUS', '/images/clients/enovus.jpg', 'Mumbai', 'fmcg-distributors', 'client'),
('client-4', 'Kiama Herbals', '/images/clients/kiama.jpeg', 'Noida', 'retail-pharmacies', 'client'),
('client-5', 'Kothilal Dental College', '/images/clients/kothilal.jpg', 'Gurugram', 'hospital-pharmacies', 'client'),
('client-6', 'Surya Hospital', '/images/clients/surya.jpg', 'Haridwar', 'hospital-pharmacies', 'client'),
('client-7', 'UNAG Pharma', '/images/clients/unag.jpeg', 'Rishikesh', 'pharma-distributors', 'client'),
('client-8', 'Shakun Medical Store', '/images/clients/shakun.jpg', 'Roorkee', 'retail-pharmacies', 'client'),
('client-9', 'Shobhit Mediworld', '/images/clients/shobhit.png', 'Haldwani', 'pharmacy-ayurvedic', 'client'),
('client-10', 'AyurCentral', '/images/clients/ayurcentral.png', 'Nainital', 'pharmacy-ayurvedic', 'client'),
('client-11', 'ABC Family Bazar', '/images/clients/abc-bazar.png', 'Lucknow', 'departmental-supermarket', 'client'),
('client-12', 'SuperValue Pharmacy', '/images/clients/supervalue.jpeg', 'Chandigarh', 'retail-pharmacies', 'client'),
('client-13', 'Asha Stores', '/images/clients/asha.jpeg', 'Pune', 'grocery-kirana', 'client'),
('client-14', 'Best Quality Store', '/images/clients/best-quality.jpeg', 'Bangalore', 'grocery-kirana', 'client'),
('client-15', 'Gicchii Supermarket', '/images/clients/gicchii.jpeg', 'Chennai', 'departmental-supermarket', 'client'),
('client-16', 'Mittal Medicose', '/images/clients/mittal.jpeg', 'Kolkata', 'retail-pharmacies', 'client'),
('client-17', 'KnitLife Pharma', '/images/clients/knitlife.jpeg', 'Hyderabad', 'pharma-distributors', 'client'),
('client-18', 'Bio Bricks', '/images/clients/biobricks.jpg', 'Ahmedabad', 'spare-parts-dealers', 'client'),
('client-19', 'Noble Remedies', '/images/clients/noble.jpeg', 'Jaipur', 'retail-pharmacies', 'client');

-- Seed Default Partners Logos
INSERT INTO client_logos (id, name, img, city, software, type) VALUES
('partner-1', 'Reckon Sales Corporation', '/images/clients/abc-bazar.png', 'Delhi', 'all', 'partner'),
('partner-2', 'Vikas Distributors', '/images/clients/big-mart.jpeg', 'Mumbai', 'all', 'partner'),
('partner-3', 'HealthCare Solutions', '/images/clients/momentous.jpg', 'Dehradun', 'all', 'partner'),
('partner-4', 'Kiama Herbals', '/images/clients/kiama.jpeg', 'Noida', 'all', 'partner'),
('partner-5', 'Kothilal Dental College', '/images/clients/kothilal.jpg', 'Gurugram', 'all', 'partner');

-- Seed Download Categories
INSERT INTO download_categories (id, value, label, is_active) VALUES
('cat-1', 'setups', 'Software Setups', TRUE),
('cat-2', 'files', 'Reckon Files', TRUE),
('cat-3', 'patches', 'Cloud Patches', TRUE);

-- Seed Default Downloads
INSERT INTO downloads (id, name, "desc", link, type, icon, is_active) VALUES
('dl-1', 'Reckon Setup', 'Core Reckon ERP system installer package.', 'https://reckonsales.in/downloads/Reckon-Setup.zip', 'setups', 'Monitor', TRUE),
('dl-2', 'Reckon Standard-GST-2.0 (28.2.2026)', 'Standard business billing and accounting update with GST-2.0 compliance.', 'https://reckonsales.in/downloads/ReckonStandardUpdate-New.zip', 'setups', 'Monitor', TRUE),
('dl-3', 'Reckon Pharma-GST-2.0 (28.2.2026)', 'Pharma and Chemist specialized update package with GST-2.0.', 'https://reckonsales.in/downloads/ReckonPharmaUpdate-New.zip', 'setups', 'Monitor', TRUE),
('dl-4', 'Suvidha HIMS Update', 'Hospital Information Management System update.', 'https://reckonsales.in/downloads/Suvidha-HIMS.zip', 'setups', 'Monitor', TRUE),
('dl-5', 'Suvidha Retail GST 2.0', 'Retail POS suvidha edition with latest GST rules.', 'https://reckonsales.in/downloads/Suvidha-Retail.zip', 'setups', 'Monitor', TRUE),
('dl-6', 'Suvidha Stockist Update', 'Stockist and distributor management edition update.', 'https://reckonsales.in/downloads/Suvidha-Stockist.zip', 'setups', 'Monitor', TRUE),
('dl-7', 'Reckon Controls', 'Required system components and activeX controls.', 'https://reckonsales.in/downloads/Reckon_Control.zip', 'files', 'Hammer', TRUE),
('dl-8', 'Reckon Invoice Formats', 'Pre-designed bill and invoice printing templates.', 'https://reckonsales.in/downloads/Reckon_Bill_Format.zip', 'files', 'FileText', TRUE),
('dl-9', 'Reckon Cheque Formats', 'Bank cheque layout templates for auto printing.', 'https://reckonsales.in/downloads/Reckon_Cheque_Format.zip', 'files', 'FileText', TRUE),
('dl-10', 'DEMO.Reckonerp.online', 'Cloud utility patch for Reckon ERP Online demo access.', 'https://reckonsales.in/downloads/DEMORECKONERPONLINE.zip', 'patches', 'Cloud', TRUE),
('dl-11', 'ERP.Reckonsales.online', 'Primary cloud access synchronization utility.', 'https://reckonsales.in/downloads/ReckonCloud.zip', 'patches', 'Cloud', TRUE),
('dl-12', 'ERP1.Reckonerp.online', 'Cloud client utility patch for Server 1.', 'https://reckonsales.in/downloads/ReckonERPonline.zip', 'patches', 'Cloud', TRUE),
('dl-13', 'ERP2.Reckonerp.online', 'Cloud client utility patch for Server 2.', 'https://reckonsales.in/downloads/erp2ReckonERPonline.zip', 'patches', 'Cloud', TRUE),
('dl-14', 'ERP3.Reckonerp.online', 'Cloud client utility patch for Server 3.', 'https://reckonsales.in/downloads/erp3ReckonERPonline.zip', 'patches', 'Cloud', TRUE),
('dl-15', 'ERP4.Reckonerp.online', 'Cloud client utility patch for Server 4.', 'https://reckonsales.in/downloads/erp4ReckonERPonline.zip', 'patches', 'Cloud', TRUE),
('dl-16', 'ERP5.Reckonerp.online', 'Cloud client utility patch for Server 5.', 'https://reckonsales.in/downloads/erp5ReckonERPonline.zip', 'patches', 'Cloud', TRUE);

-- Seed Gallery Categories
INSERT INTO gallery_categories (id, value, label) VALUES
('gcat-1', 'award-function', 'Award Function'),
('gcat-2', 'gift-distribution', 'Gift Distribution'),
('gcat-3', 'presentation', 'Presentation');

-- Seed Default Gallery Items
INSERT INTO gallery_items (id, title, img, category) VALUES
('award-01', 'Award Function — Photo 1', 'https://reckonsales.in/images/gallery/02/01.jpg', 'award-function'),
('award-02', 'Award Function — Photo 2', 'https://reckonsales.in/images/gallery/02/02.jpg', 'award-function'),
('gift-01', 'Gift Distribution — Photo 1', 'https://reckonsales.in/images/gallery/03/01.jpg', 'gift-distribution'),
('pres-01', 'Presentation — Photo 1', 'https://reckonsales.in/images/gallery/04/01.jpg', 'presentation');

-- Seed Default Testimonials
INSERT INTO testimonials (id, name, designation, company, industry, quote, rating) VALUES
('testi-1', 'Rajesh Kumar', 'Owner', 'Kumar Medical Store', 'pharmacy-healthcare', 'Reckon has completely transformed how we manage our pharmacy. The drug expiry tracking and batch management features have saved us lakhs in potential losses.', 5),
('testi-2', 'Priya Sharma', 'Operations Manager', 'FreshMart Supermarket', 'retail', 'The POS system is incredibly fast and reliable. Our checkout times have reduced by 40% since we switched to Reckon-Mart. The customer is always happy.', 5),
('testi-3', 'Amit Verma', 'Managing Director', 'Verma Auto Spares', 'auto-parts', 'Managing thousands of auto parts with different vehicle compatibilities was a nightmare before Reckon. Now our team finds any part in seconds.', 5),
('testi-4', 'Sunita Agarwal', 'Proprietor', 'Sunita Fashion House', 'retail', 'The size and color matrix feature is exactly what our garment business needed. Inventory tracking across variants has never been easier.', 4),
('testi-5', 'Mohammad Farhan', 'Business Owner', 'City Electronics', 'retail', 'Warranty tracking and service management have reduced our customer complaints significantly. Reckon is an essential part of our business now.', 5),
('testi-6', 'Deepak Gupta', 'CEO', 'Gupta Distributors', 'fmcg', 'Multi-branch synchronization changed the game for us. We now have real-time visibility across all our distribution points. Outstanding support team.', 5);

-- Seed Default Banners
INSERT INTO banners (id, title, description, image_url, link_url, sort_order, is_active, redirect_path) VALUES
('ban-5', 'Reckon SmartScan 2.0 — AI invoice scanning is here', 'Scan any invoice in under 3 seconds. Auto GST categorisation. Works with 500+ distributors across India.', '/images/retail_pharmacy_billing.png', '/software/retail', 0, TRUE, '/software/retail'),
('ban-1', 'Reckon Retail POS Billing', 'Supercharge your retail outlet with the fastest barcode scanning, inventory tracking, and automatic invoice printing.', '/images/home_pos_showcase.png', '/software/retail', 1, TRUE, '/software/retail'),
('ban-2', 'Pharmacy & Chemist Special Edition', 'Track drug expiry, batch numbers, schedule-H regulations, and file automatic GST returns seamlessly.', '/images/retail_pharmacy_billing.png', '/software/pharmacy-healthcare', 2, TRUE, '/software/pharmacy-healthcare'),
('ban-3', 'FMCG & Wholesale ERP Solutions', 'Manage bulk orders, credit accounts, salesman route allocations, and multi-branch warehouse synchronization.', '/images/fmcg_distributor_billing.png', '/software/fmcg', 3, TRUE, '/software/fmcg'),
('ban-4', 'Auto Parts & Hardware POS', 'Handle thousands of part numbers, compatibility filters, hotkey billing, and barcode integration.', '/images/multi_branch_autoparts_billing.png', '/software/auto-parts', 4, TRUE, '/software/auto-parts');
