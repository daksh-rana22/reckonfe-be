import React from 'react';

export default function SoftwareOverviewMockup({ slug, color = '#3B82F6' }) {
  // Common UI Frame wrapper elements
  const renderWindowFrame = (title, accent, content) => {
    return (
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Window Background shadow */}
        <rect width="400" height="300" rx="8" fill="#1E293B" />
        
        {/* App Title Bar */}
        <rect width="400" height="28" rx="8" fill="#0F172A" />
        <rect y="20" width="400" height="8" fill="#0F172A" />
        
        {/* Window control buttons */}
        <circle cx="15" cy="14" r="4" fill="#EF4444" />
        <circle cx="27" cy="14" r="4" fill="#F59E0B" />
        <circle cx="39" cy="14" r="4" fill="#10B981" />
        
        {/* Title text */}
        <text
          x="200"
          y="18"
          fill="#94A3B8"
          fontSize="9"
          fontWeight="bold"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          {title}
        </text>

        {/* Sidebar */}
        <rect x="0" y="28" width="55" height="272" fill="#0F172A" />
        <line x1="55" y1="28" x2="55" y2="300" stroke="#334155" strokeWidth="1" />
        
        {/* Sidebar Nav Items Mockup */}
        <rect x="8" y="40" width="39" height="14" rx="2" fill={accent} fillOpacity="0.2" stroke={accent} strokeWidth="1" />
        <circle cx="16" cy="47" r="3" fill={accent} />
        <line x1="24" y1="47" x2="40" y2="47" stroke={accent} strokeWidth="2" strokeLinecap="round" />

        {/* Other sidebar icons */}
        <g opacity="0.4">
          <circle cx="16" cy="72" r="3" fill="#94A3B8" />
          <line x1="24" y1="72" x2="42" y2="72" stroke="#94A3B8" strokeWidth="2" />

          <circle cx="16" cy="94" r="3" fill="#94A3B8" />
          <line x1="24" y1="94" x2="38" y2="94" stroke="#94A3B8" strokeWidth="2" />

          <circle cx="16" cy="116" r="3" fill="#94A3B8" />
          <line x1="24" y1="116" x2="44" y2="116" stroke="#94A3B8" strokeWidth="2" />

          <circle cx="16" cy="255" r="3" fill="#94A3B8" />
          <line x1="24" y1="255" x2="40" y2="255" stroke="#94A3B8" strokeWidth="2" />
        </g>

        {/* Main Work Area */}
        <g transform="translate(55, 28)">
          {content}
        </g>
      </svg>
    );
  };

  switch (slug) {
    case 'reckon-mart':
      return renderWindowFrame("Reckon-Mart POS Terminal", color, (
        <>
          {/* Main workspace */}
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />
          
          {/* Header */}
          <rect x="10" y="8" width="325" height="22" rx="3" fill="#1E293B" stroke="#334155" />
          <text x="18" y="22" fill="#E2E8F0" fontSize="8" fontWeight="bold">CUSTOMER: Walk-in Client</text>
          <text x="325" y="22" fill="#10B981" fontSize="8" fontWeight="bold" textAnchor="end">TILL #1 ACTIVE</text>

          {/* Cart Table - Shrunk height to 170 to avoid cut-off */}
          <rect x="10" y="38" width="200" height="170" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="52" fill="#94A3B8" fontSize="7" fontWeight="bold">ITEM DESCRIPTION</text>
          <text x="140" y="52" fill="#94A3B8" fontSize="7" fontWeight="bold" textAnchor="middle">QTY</text>
          <text x="195" y="52" fill="#94A3B8" fontSize="7" fontWeight="bold" textAnchor="end">PRICE</text>
          <line x1="10" y1="58" x2="210" y2="58" stroke="#334155" />

          {/* Cart Row 1 */}
          <text x="18" y="72" fill="#E2E8F0" fontSize="7">Amul Butter 500g</text>
          <text x="140" y="72" fill="#FBBF24" fontSize="7" textAnchor="middle">2</text>
          <text x="195" y="72" fill="#E2E8F0" fontSize="7" textAnchor="end">₹550.00</text>

          {/* Cart Row 2 */}
          <text x="18" y="86" fill="#E2E8F0" fontSize="7">Ashirvaad Atta 10kg</text>
          <text x="140" y="86" fill="#FBBF24" fontSize="7" textAnchor="middle">1</text>
          <text x="195" y="86" fill="#E2E8F0" fontSize="7" textAnchor="end">₹460.00</text>

          {/* Cart Row 3 */}
          <text x="18" y="100" fill="#E2E8F0" fontSize="7">Surf Excel Liquid 2L</text>
          <text x="140" y="100" fill="#FBBF24" fontSize="7" textAnchor="middle">1</text>
          <text x="195" y="100" fill="#E2E8F0" fontSize="7" textAnchor="end">₹380.00</text>

          {/* Cart Row 4 */}
          <text x="18" y="114" fill="#E2E8F0" fontSize="7">Tata Salt Lite 1kg</text>
          <text x="140" y="114" fill="#FBBF24" fontSize="7" textAnchor="middle">3</text>
          <text x="195" y="114" fill="#E2E8F0" fontSize="7" textAnchor="end">₹84.00</text>

          {/* Billing Summary Column - Shrunk height to 170 */}
          <rect x="220" y="38" width="115" height="170" rx="4" fill="#1E293B" stroke="#334155" />
          
          {/* Digital total readout */}
          <rect x="226" y="44" width="103" height="42" rx="3" fill="#020617" stroke="#EF4E5D" strokeWidth="1" />
          <text x="232" y="54" fill="#F87171" fontSize="6">NET AMOUNT DUE</text>
          <text x="323" y="80" fill="#EF4E5D" fontSize="18" fontWeight="bold" textAnchor="end" fontFamily="monospace">₹1,474.00</text>

          {/* Tax summary breakdown */}
          <text x="228" y="100" fill="#94A3B8" fontSize="7">Gross Amt:</text>
          <text x="327" y="100" fill="#E2E8F0" fontSize="7" textAnchor="end">₹1,388.00</text>

          <text x="228" y="112" fill="#94A3B8" fontSize="7">CGST (9.0%):</text>
          <text x="327" y="112" fill="#E2E8F0" fontSize="7" textAnchor="end">₹43.00</text>

          <text x="228" y="124" fill="#94A3B8" fontSize="7">SGST (9.0%):</text>
          <text x="327" y="124" fill="#E2E8F0" fontSize="7" textAnchor="end">₹43.00</text>

          <line x1="220" y1="134" x2="335" y2="134" stroke="#334155" />

          {/* POS Action Buttons */}
          <rect x="226" y="142" width="103" height="16" rx="2" fill="#10B981" />
          <text x="277" y="153" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">CASH PAY [F10]</text>

          <rect x="226" y="162" width="103" height="16" rx="2" fill="#3B82F6" />
          <text x="277" y="173" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">CARD / UPI [F11]</text>

          <rect x="226" y="182" width="103" height="16" rx="2" fill="#475569" />
          <text x="277" y="193" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">ADD DISCOUNT [F4]</text>

          {/* Barcode scanner footer indicator shifted up to y=218 */}
          <rect x="10" y="218" width="200" height="22" rx="3" fill="#0F172A" stroke="#334155" />
          <path d="M22 229H34" stroke="#F43F5E" strokeWidth="2.5" strokeDasharray="2 1" />
          <text x="42" y="232" fill="#94A3B8" fontSize="7">Awaiting item barcode scan...</text>
        </>
      ));

    case 'reckon-suvidha':
      return renderWindowFrame("Reckon-Suvidha Pharmacy ERP", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Stat metrics */}
          <g transform="translate(10, 8)">
            <rect width="100" height="42" rx="4" fill="#1E293B" stroke="#334155" />
            <text x="8" y="14" fill="#94A3B8" fontSize="6" fontWeight="bold">EXPIRING BATCHES</text>
            <text x="8" y="34" fill="#EF4444" fontSize="16" fontWeight="bold">04</text>
            <text x="100" y="32" fill="#EF4444" fontSize="6" textAnchor="end" className="font-semibold">30 Days</text>
          </g>

          <g transform="translate(120, 8)">
            <rect width="105" height="42" rx="4" fill="#1E293B" stroke="#334155" />
            <text x="8" y="14" fill="#94A3B8" fontSize="6" fontWeight="bold">CRITICAL LOW STOCK</text>
            <text x="8" y="34" fill="#F59E0B" fontSize="16" fontWeight="bold">18</text>
            <text x="105" y="32" fill="#F59E0B" fontSize="6" textAnchor="end">Auto-Reorder</text>
          </g>

          <g transform="translate(235, 8)">
            <rect width="100" height="42" rx="4" fill="#1E293B" stroke="#334155" />
            <text x="8" y="14" fill="#94A3B8" fontSize="6" fontWeight="bold">REGULATORY COMPLIANT</text>
            <text x="8" y="34" fill="#10B981" fontSize="10" fontWeight="bold">GST/H1 LIST</text>
            <circle cx="92" cy="28" r="4" fill="#10B981" />
          </g>

          {/* Alert List Shrunk to height 170 to prevent layout clipping */}
          <rect x="10" y="60" width="325" height="170" rx="4" fill="#1E293B" stroke="#334155" />
          
          <text x="18" y="74" fill="#E2E8F0" fontSize="8" fontWeight="bold">Drug Expiry & Batch Control Ledger</text>
          <line x1="10" y1="82" x2="335" y2="82" stroke="#334155" />

          {/* Table Headers */}
          <text x="20" y="94" fill="#94A3B8" fontSize="7" fontWeight="bold">MEDICINE NAME</text>
          <text x="130" y="94" fill="#94A3B8" fontSize="7" fontWeight="bold">BATCH</text>
          <text x="180" y="94" fill="#94A3B8" fontSize="7" fontWeight="bold">EXPIRY</text>
          <text x="240" y="94" fill="#94A3B8" fontSize="7" fontWeight="bold" textAnchor="end">STOCK</text>
          <text x="325" y="94" fill="#94A3B8" fontSize="7" fontWeight="bold" textAnchor="end">ACTION</text>

          {/* Table Rows */}
          {/* Row 1 */}
          <g transform="translate(0, 104)">
            <text x="20" y="8" fill="#E2E8F0" fontSize="7">Paracetamol 650mg</text>
            <text x="130" y="8" fill="#94A3B8" fontSize="7">B-PCM88</text>
            <text x="180" y="8" fill="#EF4444" fontSize="7" fontWeight="bold">07/2026</text>
            <text x="240" y="8" fill="#E2E8F0" fontSize="7" textAnchor="end">280</text>
            <rect x="280" y="0" width="45" height="10" rx="2" fill="#EF4444" fillOpacity="0.2" stroke="#EF4444" strokeWidth="0.5" />
            <text x="302.5" y="7.5" fill="#EF4444" fontSize="5.5" fontWeight="bold" textAnchor="middle">RETURN</text>
          </g>

          {/* Row 2 */}
          <g transform="translate(0, 120)">
            <text x="20" y="8" fill="#E2E8F0" fontSize="7">Benadryl Syp 100ml</text>
            <text x="130" y="8" fill="#94A3B8" fontSize="7">B-BND91</text>
            <text x="180" y="8" fill="#E2E8F0" fontSize="7">11/2027</text>
            <text x="240" y="8" fill="#E2E8F0" fontSize="7" textAnchor="end">45</text>
            <rect x="280" y="0" width="45" height="10" rx="2" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="0.5" />
            <text x="302.5" y="7.5" fill="#60A5FA" fontSize="5.5" fontWeight="bold" textAnchor="middle">REORDER</text>
          </g>

          {/* Row 3 */}
          <g transform="translate(0, 136)">
            <text x="20" y="8" fill="#E2E8F0" fontSize="7">Amoxicillin 500 Caps</text>
            <text x="130" y="8" fill="#94A3B8" fontSize="7">B-AMX12</text>
            <text x="180" y="8" fill="#F59E0B" fontSize="7" fontWeight="bold">09/2026</text>
            <text x="240" y="8" fill="#E2E8F0" fontSize="7" textAnchor="end">12</text>
            <rect x="280" y="0" width="45" height="10" rx="2" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="0.5" />
            <text x="302.5" y="7.5" fill="#F59E0B" fontSize="5.5" fontWeight="bold" textAnchor="middle">LOW STOCK</text>
          </g>

          {/* Row 4 */}
          <g transform="translate(0, 152)">
            <text x="20" y="8" fill="#E2E8F0" fontSize="7">Atorvastatin 10mg</text>
            <text x="130" y="8" fill="#94A3B8" fontSize="7">B-ATV63</text>
            <text x="180" y="8" fill="#10B981" fontSize="7">03/2028</text>
            <text x="240" y="8" fill="#E2E8F0" fontSize="7" textAnchor="end">1,200</text>
            <rect x="280" y="0" width="45" height="10" rx="2" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="0.5" />
            <text x="302.5" y="7.5" fill="#10B981" fontSize="5.5" fontWeight="bold" textAnchor="middle">STABLE</text>
          </g>
        </>
      ));

    case 'reckon-seller':
      return renderWindowFrame("Reckon-Seller Toolkit", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Sync Stats Header */}
          <rect x="10" y="8" width="325" height="24" rx="3" fill="#1E293B" stroke="#334155" />
          <circle cx="20" cy="20" r="3.5" fill="#10B981" />
          <text x="28" y="23" fill="#E2E8F0" fontSize="7.5" fontWeight="bold">CHANNEL INTEGRATION AUTOMATION SYNCED: 1 min ago</text>

          {/* Channels Grid */}
          <g transform="translate(10, 40)">
            {/* Amazon card */}
            <rect width="102" height="60" rx="4" fill="#1E293B" stroke="#334155" />
            <text x="8" y="15" fill="#F59E0B" fontSize="8" fontWeight="bold">AMAZON INDIA</text>
            <text x="8" y="32" fill="#E2E8F0" fontSize="12" fontWeight="bold">144 Orders</text>
            <rect x="8" y="42" width="45" height="10" rx="2" fill="#10B981" fillOpacity="0.2" />
            <text x="12" y="49" fill="#10B981" fontSize="5.5" fontWeight="bold">SYNCED</text>

            {/* Flipkart card */}
            <rect x="111" y="0" width="103" height="60" rx="4" fill="#1E293B" stroke="#334155" />
            <text x="119" y="15" fill="#3B82F6" fontSize="8" fontWeight="bold">FLIPKART</text>
            <text x="119" y="32" fill="#E2E8F0" fontSize="12" fontWeight="bold">82 Orders</text>
            <rect x="119" y="42" width="45" height="10" rx="2" fill="#10B981" fillOpacity="0.2" />
            <text x="123" y="49" fill="#10B981" fontSize="5.5" fontWeight="bold">SYNCED</text>

            {/* Shopify card */}
            <rect x="223" y="0" width="102" height="60" rx="4" fill="#1E293B" stroke="#334155" />
            <text x="231" y="15" fill="#10B981" fontSize="8" fontWeight="bold">SHOPIFY</text>
            <text x="231" y="32" fill="#E2E8F0" fontSize="12" fontWeight="bold">29 Orders</text>
            <rect x="231" y="42" width="45" height="10" rx="2" fill="#10B981" fillOpacity="0.2" />
            <text x="235" y="49" fill="#10B981" fontSize="5.5" fontWeight="bold">SYNCED</text>
          </g>

          {/* Realtime graph Shrunk height to 120 */}
          <rect x="10" y="110" width="325" height="120" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="125" fill="#E2E8F0" fontSize="8" fontWeight="bold">Hourly Dispatch & Order Inflow</text>

          {/* Graph paths */}
          <g transform="translate(18, 140)">
            <line x1="0" y1="0" x2="0" y2="75" stroke="#334155" strokeWidth="1" />
            <line x1="0" y1="75" x2="300" y2="75" stroke="#334155" strokeWidth="1" />

            {/* Grid helper lines */}
            <line x1="0" y1="50" x2="300" y2="50" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="0" y1="25" x2="300" y2="25" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />

            {/* Sales flow line chart scaled down */}
            <path
              d="M10 65L40 50L80 60L120 30L160 40L200 10L240 22L280 5"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="200" cy="10" r="2.5" fill="#FBBF24" />

            <path
              d="M10 70L40 60L80 65L120 50L160 55L200 35L240 42L280 25"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeDasharray="2 1"
            />

            {/* Legend */}
            <rect x="230" y="62" width="6" height="4" fill="#F59E0B" />
            <text x="240" y="66" fill="#E2E8F0" fontSize="6">Orders</text>
            <rect x="270" y="62" width="6" height="4" fill="#3B82F6" />
            <text x="280" y="66" fill="#E2E8F0" fontSize="6">Shipments</text>
          </g>
        </>
      ));

    case 'reckon-bizview':
      return renderWindowFrame("Reckon-BizView Analytics Dashboard", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Key Metrics cards */}
          <g transform="translate(10, 8)">
            {/* Metric 1 */}
            <rect width="100" height="45" rx="4" fill="#1E293B" stroke="#334155" />
            <text x="8" y="14" fill="#94A3B8" fontSize="6" fontWeight="bold">TOTAL REVENUE</text>
            <text x="8" y="34" fill="#06B6D4" fontSize="13" fontWeight="bold">₹82.45 L</text>
            <rect x="75" y="4" width="20" height="8" rx="2" fill="#10B981" fillOpacity="0.2" />
            <text x="85" y="10" fill="#10B981" fontSize="5" fontWeight="bold" textAnchor="middle">+14%</text>

            {/* Metric 2 */}
            <rect x="110" y="0" width="105" height="45" rx="4" fill="#1E293B" stroke="#334155" />
            <text x="118" y="14" fill="#94A3B8" fontSize="6" fontWeight="bold">NET EXPENSES</text>
            <text x="118" y="34" fill="#E2E8F0" fontSize="13" fontWeight="bold">₹12.18 L</text>
            <rect x="188" y="4" width="20" height="8" rx="2" fill="#EF4444" fillOpacity="0.2" />
            <text x="198" y="10" fill="#EF4444" fontSize="5" fontWeight="bold" textAnchor="middle">-4%</text>

            {/* Metric 3 */}
            <rect x="225" y="0" width="100" height="45" rx="4" fill="#1E293B" stroke="#334155" />
            <text x="233" y="14" fill="#94A3B8" fontSize="6" fontWeight="bold">ACTIVE LEASES</text>
            <text x="233" y="34" fill="#FBBF24" fontSize="13" fontWeight="bold">4,122</text>
            <rect x="298" y="4" width="20" height="8" rx="2" fill="#10B981" fillOpacity="0.2" />
            <text x="308" y="10" fill="#10B981" fontSize="5" fontWeight="bold" textAnchor="middle">+8%</text>
          </g>

          {/* Area graph Shrunk height to 170 */}
          <rect x="10" y="60" width="205" height="170" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="74" fill="#E2E8F0" fontSize="7.5" fontWeight="bold">Corporate Growth Trend (Q1-Q2)</text>
          
          <g transform="translate(18, 90)">
            <path d="M10 90L30 70L60 78L90 48L120 54L150 15L180 28L190 8" fill="none" stroke="#06B6D4" strokeWidth="2.5" />
            <path d="M10 90L30 70L60 78L90 48L120 54L150 15L180 28L190 8V110H10Z" fill="#06B6D4" fillOpacity="0.08" />
            <line x1="10" y1="110" x2="190" y2="110" stroke="#334155" />
            <text x="10" y="122" fill="#94A3B8" fontSize="5.5">JAN</text>
            <text x="60" y="122" fill="#94A3B8" fontSize="5.5">MAR</text>
            <text x="120" y="122" fill="#94A3B8" fontSize="5.5">MAY</text>
            <text x="180" y="122" fill="#94A3B8" fontSize="5.5">JUL</text>
          </g>

          {/* Donut chart Shrunk height to 170 */}
          <rect x="220" y="60" width="115" height="170" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="228" y="74" fill="#E2E8F0" fontSize="7.5" fontWeight="bold">Segment Sales Share</text>

          <g transform="translate(277, 128)">
            <circle cx="0" cy="0" r="28" stroke="#334155" strokeWidth="10" fill="none" />
            <circle cx="0" cy="0" r="28" stroke="#06B6D4" strokeWidth="10" strokeDasharray="180" strokeDashoffset="50" fill="none" />
            <circle cx="0" cy="0" r="28" stroke="#10B981" strokeWidth="10" strokeDasharray="180" strokeDashoffset="120" fill="none" />
            <circle cx="0" cy="0" r="28" stroke="#EF4444" strokeWidth="10" strokeDasharray="180" strokeDashoffset="150" fill="none" />
            <text x="0" y="3" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">BI-VIEW</text>
          </g>

          {/* Legends shifted up */}
          <g transform="translate(228, 178)">
            <circle cx="4" cy="4" r="2.5" fill="#06B6D4" />
            <text x="12" y="7" fill="#94A3B8" fontSize="6.5">Retail: 52%</text>

            <circle cx="4" cy="16" r="2.5" fill="#10B981" />
            <text x="12" y="19" fill="#94A3B8" fontSize="6.5">Pharmacy: 30%</text>

            <circle cx="4" cy="28" r="2.5" fill="#EF4444" />
            <text x="12" y="31" fill="#94A3B8" fontSize="6.5">Distrib: 18%</text>
          </g>
        </>
      ));

    case 'automobiles-parts':
      return renderWindowFrame("Auto Parts Catalog", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Finder Panel Shrunk height to 220 */}
          <rect x="10" y="8" width="150" height="220" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="24" fill="#E2E8F0" fontSize="8" fontWeight="bold">COMPATIBILITY SEARCH</text>
          <line x1="10" y1="32" x2="160" y2="32" stroke="#334155" />

          {/* Form Fields */}
          <text x="18" y="46" fill="#94A3B8" fontSize="6.5" fontWeight="bold">SELECT VEHICLE BRAND</text>
          <rect x="18" y="50" width="134" height="15" rx="2" fill="#0F172A" stroke="#334155" />
          <text x="24" y="60" fill="#E2E8F0" fontSize="7">HYUNDAI</text>
          <polygon points="142,55 146,55 144,59" fill="#E2E8F0" />

          <text x="18" y="74" fill="#94A3B8" fontSize="6.5" fontWeight="bold">VEHICLE MODEL</text>
          <rect x="18" y="78" width="134" height="15" rx="2" fill="#0F172A" stroke="#334155" />
          <text x="24" y="88" fill="#E2E8F0" fontSize="7">CRETA (2018-2022)</text>
          <polygon points="142,83 146,83 144,87" fill="#E2E8F0" />

          <text x="18" y="102" fill="#94A3B8" fontSize="6.5" fontWeight="bold">ENGINE / TRIM TYPE</text>
          <rect x="18" y="106" width="134" height="15" rx="2" fill="#0F172A" stroke="#334155" />
          <text x="24" y="116" fill="#E2E8F0" fontSize="7">1.6L CRDI DIESEL</text>
          <polygon points="142,111 146,111 144,115" fill="#E2E8F0" />

          <rect x="18" y="130" width="134" height="18" rx="3" fill="#EF4444" />
          <text x="85" y="142" fill="#FFFFFF" fontSize="7.5" fontWeight="bold" textAnchor="middle">FIND COMPATIBLE PARTS</text>

          {/* Rack Location shifted up */}
          <rect x="18" y="160" width="134" height="58" rx="3" fill="#0F172A" stroke="#334155" />
          <text x="24" y="172" fill="#94A3B8" fontSize="6" fontWeight="bold">RACK STORAGE ASSIGNMENT</text>
          <text x="24" y="190" fill="#EF4444" fontSize="12" fontWeight="bold">SECTOR E-4</text>
          <text x="24" y="206" fill="#94A3B8" fontSize="6.5">Shelf #3, Row B (Heavy)</text>

          {/* Results List Shrunk height to 220 */}
          <rect x="170" y="8" width="165" height="220" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="178" y="24" fill="#E2E8F0" fontSize="8" fontWeight="bold">MATCHING CATALOG INVENTORY</text>
          <line x1="170" y1="32" x2="335" y2="32" stroke="#334155" />

          {/* Parts Results */}
          <g transform="translate(170, 38)">
            <rect x="8" y="4" width="149" height="32" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="14" y="15" fill="#E2E8F0" fontSize="7.5" fontWeight="bold">Front Brake Pads Set (OEM)</text>
            <text x="14" y="26" fill="#94A3B8" fontSize="6">Part: HY-9283-F  •  Stock: 12 units</text>
            <text x="150" y="18" fill="#EF4444" fontSize="8" fontWeight="bold" textAnchor="end">₹2,850</text>
          </g>

          <g transform="translate(170, 76)">
            <rect x="8" y="4" width="149" height="32" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="14" y="15" fill="#E2E8F0" fontSize="7.5" fontWeight="bold">Engine Air Filter (Bosch)</text>
            <text x="14" y="26" fill="#94A3B8" fontSize="6">Part: BS-8291-A  •  Stock: 48 units</text>
            <text x="150" y="18" fill="#EF4444" fontSize="8" fontWeight="bold" textAnchor="end">₹640</text>
          </g>

          <g transform="translate(170, 114)">
            <rect x="8" y="4" width="149" height="32" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="14" y="15" fill="#E2E8F0" fontSize="7.5" fontWeight="bold">Diesel Fuel Filter element</text>
            <text x="14" y="26" fill="#94A3B8" fontSize="6">Part: FL-FLT88-D  •  Stock: 5 units</text>
            <text x="150" y="18" fill="#EF4444" fontSize="8" fontWeight="bold" textAnchor="end">₹1,180</text>
          </g>
        </>
      ));

    case 'books-stationery':
      return renderWindowFrame("Bookstore ISBN Manager", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* ISBN Scanner Top Bar */}
          <rect x="10" y="8" width="325" height="24" rx="3" fill="#1E293B" stroke="#334155" />
          <path d="M18 15V25M22 15V25M24 15V25M28 15V25M30 15V25M34 15V25" stroke="#A78BFA" strokeWidth="1" />
          <text x="40" y="24" fill="#94A3B8" fontSize="7">ISBN Query:</text>
          <text x="90" y="24" fill="#E2E8F0" fontSize="7.5" fontWeight="bold" fontFamily="monospace">978-3-16-148410-0</text>
          <rect x="280" y="13" width="48" height="14" rx="2" fill="#8B5CF6" />
          <text x="304" y="22" fill="#FFFFFF" fontSize="6" fontWeight="bold" textAnchor="middle">RAPID SEARCH</text>

          {/* Left panel - Shrunk height to 190 */}
          <rect x="10" y="40" width="150" height="190" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="54" fill="#E2E8F0" fontSize="8" fontWeight="bold">SCHOOL BUNDLE BUILDER</text>
          <line x1="10" y1="62" x2="160" y2="62" stroke="#334155" />

          <text x="18" y="74" fill="#94A3B8" fontSize="6.5">SELECT BOARD & CLASS</text>
          <rect x="18" y="78" width="134" height="15" rx="2" fill="#0F172A" stroke="#334155" />
          <text x="24" y="88" fill="#E2E8F0" fontSize="7">CBSE - CLASS 10TH SET</text>
          <polygon points="142,83 146,83 144,87" fill="#E2E8F0" />

          {/* Books in set */}
          <g transform="translate(18, 100)">
            <circle cx="4" cy="4" r="2.5" fill="#8B5CF6" />
            <text x="12" y="7" fill="#E2E8F0" fontSize="7">Maths Vol 1 (RD Sharma)</text>
            
            <circle cx="4" cy="18" r="2.5" fill="#8B5CF6" />
            <text x="12" y="21" fill="#E2E8F0" fontSize="7">Science Text NCERT</text>

            <circle cx="4" cy="30" r="2.5" fill="#8B5CF6" />
            <text x="12" y="33" fill="#E2E8F0" fontSize="7">English Reader Set</text>
          </g>

          <rect x="18" y="195" width="134" height="22" rx="3" fill="#8B5CF6" />
          <text x="85" y="209" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">ADD BUNDLE TO CART</text>

          {/* Right panel - Shrunk height to 190 */}
          <rect x="170" y="40" width="165" height="190" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="178" y="54" fill="#E2E8F0" fontSize="8" fontWeight="bold">PUBLISHER & STOCK LEDGER</text>
          <line x1="170" y1="62" x2="335" y2="62" stroke="#334155" />

          {/* Publisher inventory stats */}
          <text x="178" y="74" fill="#94A3B8" fontSize="7">Oxford University Press</text>
          <rect x="178" y="80" width="105" height="4" rx="2" fill="#0F172A" />
          <rect x="178" y="80" width="75" height="4" rx="2" fill="#8B5CF6" />
          <text x="327" y="79" fill="#8B5CF6" fontSize="7" textAnchor="end" fontWeight="bold">142</text>

          <text x="178" y="96" fill="#94A3B8" fontSize="7">S. Chand Publications</text>
          <rect x="178" y="102" width="105" height="4" rx="2" fill="#0F172A" />
          <rect x="178" y="102" width="60" height="4" rx="2" fill="#8B5CF6" />
          <text x="327" y="101" fill="#8B5CF6" fontSize="7" textAnchor="end" fontWeight="bold">95</text>

          {/* Book Ageing Warning shifted up */}
          <rect x="178" y="145" width="149" height="36" rx="3" fill="#EF4444" fillOpacity="0.1" stroke="#EF4444" strokeWidth="0.5" />
          <text x="184" y="157" fill="#F87171" fontSize="7" fontWeight="bold">DEAD STOCK WARNING</text>
          <text x="184" y="170" fill="#E2E8F0" fontSize="6">14 Titles inactive for 180 Days.</text>
        </>
      ));

    case 'chemist-shop':
      return renderWindowFrame("Chemist Quick POS Billing", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Speed billing row */}
          <rect x="10" y="8" width="325" height="22" rx="3" fill="#1E293B" stroke="#334155" />
          <text x="18" y="22" fill="#94A3B8" fontSize="7.5">Med Search:</text>
          <text x="70" y="22" fill="#E2E8F0" fontSize="8" fontWeight="bold">Combiflam Tab (Salt: Ibuprofen + Paracetamol)</text>

          {/* Left: Invoice items Shrunk height to 188 */}
          <rect x="10" y="38" width="200" height="188" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="52" fill="#94A3B8" fontSize="7" fontWeight="bold">DRUG / MEDICINE</text>
          <text x="120" y="52" fill="#94A3B8" fontSize="7" fontWeight="bold" textAnchor="middle">QTY</text>
          <text x="195" y="52" fill="#94A3B8" fontSize="7" fontWeight="bold" textAnchor="end">AMT</text>
          <line x1="10" y1="58" x2="210" y2="58" stroke="#334155" />

          <text x="18" y="72" fill="#E2E8F0" fontSize="7">Combiflam Strip (15 T)</text>
          <text x="120" y="72" fill="#E2E8F0" fontSize="7" textAnchor="middle">2</text>
          <text x="195" y="72" fill="#E2E8F0" fontSize="7" textAnchor="end">₹130.00</text>

          <text x="18" y="86" fill="#E2E8F0" fontSize="7">Augmentin 625 Duo (10 T)</text>
          <text x="120" y="86" fill="#E2E8F0" fontSize="7" textAnchor="middle">1</text>
          <text x="195" y="86" fill="#E2E8F0" fontSize="7" textAnchor="end">₹201.20</text>

          {/* Doctor reference shifted up */}
          <rect x="18" y="195" width="184" height="22" rx="3" fill="#0F172A" stroke="#334155" />
          <text x="24" y="209" fill="#94A3B8" fontSize="7">Doctor Ref:</text>
          <text x="75" y="209" fill="#E2E8F0" fontSize="7.5" fontWeight="bold">Dr. S. K. Sen (Max)</text>

          {/* Right: Salt composition substitute suggestor Shrunk height to 188 */}
          <rect x="220" y="38" width="115" height="188" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="226" y="52" fill="#10B981" fontSize="8" fontWeight="bold">SALT COMPOSITION</text>
          <text x="226" y="62" fill="#94A3B8" fontSize="6.5">Paracetamol 650mg</text>
          <line x1="220" y1="68" x2="335" y2="68" stroke="#334155" />

          {/* Substitutes cleaned to avoid overlaps */}
          <g transform="translate(224, 72)">
            <rect width="107" height="30" rx="2" fill="#0F172A" stroke="#10B981" strokeWidth="0.5" />
            <text x="6" y="11" fill="#E2E8F0" fontSize="6.5" fontWeight="bold">Dolo 650 Tab</text>
            <text x="6" y="22" fill="#10B981" fontSize="5.5">Margin: 45% • High Stock</text>
            <text x="101" y="11" fill="#E2E8F0" fontSize="7" fontWeight="bold" textAnchor="end">₹32.00</text>
          </g>

          <g transform="translate(224, 110)">
            <rect width="107" height="30" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="0.5" />
            <text x="6" y="11" fill="#E2E8F0" fontSize="6.5" fontWeight="bold">Calpol 650 Tab</text>
            <text x="6" y="22" fill="#94A3B8" fontSize="5.5">Margin: 20% • Low Stock</text>
            <text x="101" y="11" fill="#E2E8F0" fontSize="7" fontWeight="bold" textAnchor="end">₹30.50</text>
          </g>

          {/* Dynamic Substitute select button shifted up to 195 */}
          <rect x="224" y="195" width="107" height="22" rx="3" fill="#10B981" />
          <text x="277.5" y="209" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">SWAP WITH DOLO 650</text>
        </>
      ));

    case 'cosmetics-personal-care':
      return renderWindowFrame("Beauty Care Brand Ledger", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Stats Bar */}
          <g transform="translate(10, 8)">
            <rect width="155" height="40" rx="3" fill="#1E293B" stroke="#334155" />
            <text x="8" y="12" fill="#94A3B8" fontSize="6" fontWeight="bold">CUSTOMER LOYALTY CARD DETAILS</text>
            <text x="8" y="24" fill="#EC4899" fontSize="8.5" fontWeight="bold">Aditi Roy</text>
            <text x="8" y="34" fill="#10B981" fontSize="6">Points: 1,850 • Voucher Eligible</text>

            <rect x="170" y="0" width="155" height="40" rx="3" fill="#1E293B" stroke="#334155" />
            <text x="8" y="12" fill="#94A3B8" fontSize="6" fontWeight="bold" transform="translate(170, 0)">ACTIVE PROMO CAMPAIGN</text>
            <text x="8" y="28" fill="#EC4899" fontSize="8.5" fontWeight="bold" transform="translate(170, 0)">LAKME BRIGHT 15% OFF</text>
          </g>

          {/* Left Side: Brand-wise breakdown charts Shrunk height to 172 */}
          <rect x="10" y="56" width="150" height="172" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="70" fill="#E2E8F0" fontSize="8" fontWeight="bold">Brand Margin Analyzer</text>
          <line x1="10" y1="78" x2="160" y2="78" stroke="#334155" />

          <g transform="translate(18, 90)">
            <text x="0" y="10" fill="#94A3B8" fontSize="7">L'Oreal Paris (Sales Share: 35%)</text>
            <rect y="16" width="134" height="6" rx="3" fill="#0F172A" />
            <rect y="16" width="47" height="6" rx="3" fill="#EC4899" />

            <text x="0" y="42" fill="#94A3B8" fontSize="7">Lakme India (Sales Share: 45%)</text>
            <rect y="48" width="134" height="6" rx="3" fill="#0F172A" />
            <rect y="48" width="60" height="6" rx="3" fill="#10B981" />
          </g>

          {/* Right Side: Combos and Schemes List Shrunk height to 172 */}
          <rect x="170" y="56" width="165" height="172" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="178" y="70" fill="#E2E8F0" fontSize="8" fontWeight="bold">PROMOTIONAL SCHEMES WIZARD</text>
          <line x1="170" y1="78" x2="335" y2="78" stroke="#334155" />

          {/* Scheme 1 */}
          <g transform="translate(178, 88)">
            <rect width="149" height="32" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="8" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">Lipstick Range B2G1 Free</text>
            <text x="8" y="24" fill="#EC4899" fontSize="6.5">Buy any 2 Maybelline, Get 1 free.</text>
          </g>

          {/* Scheme 2 */}
          <g transform="translate(178, 128)">
            <rect width="149" height="32" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="8" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">VLCC Facial Kit Combo Offer</text>
            <text x="8" y="24" fill="#EC4899" fontSize="6.5">Face Wash + Scrub Bundle @ ₹350</text>
          </g>

          {/* Trigger button shifted up to y=198 */}
          <rect x="178" y="198" width="149" height="22" rx="3" fill="#EC4899" />
          <text x="252.5" y="212" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">APPLY LAKME CAMPAIGN</text>
        </>
      ));

    case 'department-grocery':
      return renderWindowFrame("Departmental Super-Store Cash Register", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Top Info Bar */}
          <rect x="10" y="8" width="325" height="22" rx="3" fill="#1E293B" stroke="#334155" />
          <text x="18" y="22" fill="#94A3B8" fontSize="7.5">ACTIVE CASHIER: Ravi Kumar</text>
          <text x="325" y="22" fill="#E2E8F0" fontSize="7.5" fontWeight="bold" textAnchor="end">TILL CASH: ₹18,420.00</text>

          {/* Left panel - Scanned List */}
          <rect x="10" y="38" width="200" height="174" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="52" fill="#94A3B8" fontSize="7" fontWeight="bold">SCANNED ITEMS LOG</text>
          <line x1="10" y1="58" x2="210" y2="58" stroke="#334155" />

          {/* Items */}
          <g transform="translate(0, 62)">
            <text x="18" y="8" fill="#E2E8F0" fontSize="6.5">Fortune Mustard Oil 1L (Qty: 2)</text>
            <text x="195" y="8" fill="#E2E8F0" fontSize="7" textAnchor="end">₹340.00</text>
            
            <text x="18" y="22" fill="#E2E8F0" fontSize="6.5">Basmati Rice Premium 5kg (Weight)</text>
            <text x="195" y="22" fill="#E2E8F0" fontSize="7" textAnchor="end">₹490.00</text>

            <text x="18" y="36" fill="#E2E8F0" fontSize="6.5">Britannia Marie Gold Biscuit (Qty: 5)</text>
            <text x="195" y="36" fill="#E2E8F0" fontSize="7" textAnchor="end">₹125.00</text>
          </g>

          {/* Till Controls / Cash Drawer Status shifted up to y=218 */}
          <rect x="10" y="218" width="200" height="26" rx="3" fill="#0F172A" stroke="#334155" />
          <circle cx="24" cy="231" r="3" fill="#10B981" />
          <text x="34" y="234" fill="#E2E8F0" fontSize="7" fontWeight="bold">CASH DRAWER LOCKED [F8]</text>

          {/* Right panel - Billing totals & keypad Shrunk height to 210 */}
          <rect x="220" y="38" width="115" height="206" rx="4" fill="#1E293B" stroke="#334155" />
          
          <rect x="226" y="44" width="103" height="36" rx="3" fill="#020617" stroke="#F59E0B" strokeWidth="1" />
          <text x="232" y="52" fill="#FBBF24" fontSize="6">GRAND TOTAL</text>
          <text x="323" y="74" fill="#FBBF24" fontSize="16" fontWeight="bold" textAnchor="end" fontFamily="monospace">₹955.00</text>

          {/* Payment Split */}
          <text x="228" y="92" fill="#94A3B8" fontSize="6.5">Cash tender:</text>
          <text x="327" y="92" fill="#E2E8F0" fontSize="6.5" textAnchor="end">₹1,000</text>
          <text x="228" y="104" fill="#10B981" fontSize="6.5" fontWeight="bold">Refund change:</text>
          <text x="327" y="104" fill="#10B981" fontSize="6.5" fontWeight="bold" textAnchor="end">₹45</text>

          {/* Keypad controls shifted up & condensed */}
          <g transform="translate(226, 116)">
            <rect width="31" height="14" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="15.5" y="9.5" fill="#E2E8F0" fontSize="7" textAnchor="middle">7</text>
            <rect x="36" y="0" width="31" height="14" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="51.5" y="9.5" fill="#E2E8F0" fontSize="7" textAnchor="middle">8</text>
            <rect x="72" y="0" width="31" height="14" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="87.5" y="9.5" fill="#E2E8F0" fontSize="7" textAnchor="middle">9</text>

            <rect y="18" width="31" height="14" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="15.5" y="27.5" fill="#E2E8F0" fontSize="7" textAnchor="middle">4</text>
            <rect x="36" y="18" width="31" height="14" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="51.5" y="27.5" fill="#E2E8F0" fontSize="7" textAnchor="middle">5</text>
            <rect x="72" y="18" width="31" height="14" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="87.5" y="27.5" fill="#E2E8F0" fontSize="7" textAnchor="middle">6</text>

            <rect y="36" width="31" height="14" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="15.5" y="45.5" fill="#E2E8F0" fontSize="7" textAnchor="middle">1</text>
            <rect x="36" y="36" width="31" height="14" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="51.5" y="45.5" fill="#E2E8F0" fontSize="7" textAnchor="middle">2</text>
            <rect x="72" y="36" width="31" height="14" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="87.5" y="45.5" fill="#E2E8F0" fontSize="7" textAnchor="middle">3</text>

            <rect y="54" width="103" height="15" rx="2" fill="#10B981" />
            <text x="51.5" y="64" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">PRINT [ENT]</text>
          </g>
        </>
      ));

    case 'dry-fruits-spices':
      return renderWindowFrame("Dry Fruits & Spices Weighing Hub", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Weighing scale digital display */}
          <rect x="10" y="8" width="325" height="60" rx="4" fill="#090D16" stroke="#D97706" strokeWidth="1.5" />
          <text x="18" y="22" fill="#F59E0B" fontSize="7" fontWeight="bold">LIVE SCALE INTEGRATED READOUT</text>
          
          <text x="18" y="52" fill="#F59E0B" fontSize="24" fontWeight="bold" fontFamily="monospace">2.645 kg</text>
          
          <text x="180" y="32" fill="#94A3B8" fontSize="7">PRODUCT RATE / KG</text>
          <text x="180" y="48" fill="#E2E8F0" fontSize="11" fontWeight="bold">₹1,200.00</text>

          <text x="270" y="32" fill="#10B981" fontSize="7">CALCULATED VALUE</text>
          <text x="270" y="48" fill="#10B981" fontSize="13" fontWeight="bold">₹3,174.00</text>

          {/* Product selector grid Shrunk height to 154 */}
          <rect x="10" y="76" width="200" height="154" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="90" fill="#E2E8F0" fontSize="8" fontWeight="bold">Quick Inventory Select Grid</text>
          <line x1="10" y1="96" x2="210" y2="96" stroke="#334155" />

          {/* Grid buttons compact */}
          <g transform="translate(18, 102)">
            <rect width="54" height="20" rx="2" fill="#D97706" fillOpacity="0.2" stroke="#D97706" strokeWidth="0.5" />
            <text x="27" y="12" fill="#E2E8F0" fontSize="6.5" fontWeight="bold" textAnchor="middle">Almonds</text>

            <rect x="62" y="0" width="54" height="20" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="0.5" />
            <text x="89" y="12" fill="#E2E8F0" fontSize="6.5" textAnchor="middle">Cashews</text>

            <rect x="124" y="0" width="54" height="20" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="0.5" />
            <text x="151" y="12" fill="#E2E8F0" fontSize="6.5" textAnchor="middle">Pistachios</text>

            <rect y="26" width="54" height="20" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="0.5" />
            <text x="27" y="38" fill="#E2E8F0" fontSize="6.5" textAnchor="middle">Walnuts</text>

            <rect x="62" y="26" width="54" height="20" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="0.5" />
            <text x="89" y="38" fill="#E2E8F0" fontSize="6.5" textAnchor="middle">Raisins</text>

            <rect x="124" y="26" width="54" height="20" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="0.5" />
            <text x="151" y="38" fill="#E2E8F0" fontSize="6.5" textAnchor="middle">Cardamom</text>
          </g>

          {/* Right panel - Wastage log Shrunk height to 154 */}
          <rect x="220" y="76" width="115" height="154" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="228" y="90" fill="#E2E8F0" fontSize="8" fontWeight="bold">MOISTURE LOSS LOG</text>
          <line x1="220" y1="96" x2="335" y2="96" stroke="#334155" />

          {/* Waste parameters */}
          <text x="228" y="108" fill="#94A3B8" fontSize="6.5">Allowed wastage:</text>
          <text x="327" y="108" fill="#E2E8F0" fontSize="6.5" textAnchor="end">1.50%</text>

          <text x="228" y="122" fill="#EF4444" fontSize="6.5" fontWeight="bold">Dry shrinkage:</text>
          <text x="327" y="122" fill="#EF4444" fontSize="6.5" fontWeight="bold" textAnchor="end">2.14%</text>

          {/* Button shifted up to y=150 */}
          <rect x="226" y="150" width="103" height="24" rx="3" fill="#D97706" />
          <text x="277.5" y="164" fill="#FFFFFF" fontSize="7.5" fontWeight="bold" textAnchor="middle">CORRECT STOCK</text>
        </>
      ));

    case 'footwear-showroom':
      return renderWindowFrame("Footwear Size Matrix", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Model info banner */}
          <rect x="10" y="8" width="325" height="24" rx="3" fill="#1E293B" stroke="#334155" />
          <text x="18" y="24" fill="#E2E8F0" fontSize="8" fontWeight="bold">SELECTED ITEM: Nike Pegasus Runner v39  •  Brand: Nike</text>

          {/* Grid table Shrunk height to 188 */}
          <rect x="10" y="40" width="325" height="188" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="54" fill="#E2E8F0" fontSize="8" fontWeight="bold">SIZE & COLOR STOCK QUANTITY GRID</text>
          <line x1="10" y1="62" x2="335" y2="62" stroke="#334155" />

          {/* Table column headers */}
          <text x="18" y="74" fill="#94A3B8" fontSize="7" fontWeight="bold">COLOR \ SIZE</text>
          <text x="120" y="74" fill="#94A3B8" fontSize="7" fontWeight="bold">UK 7</text>
          <text x="160" y="74" fill="#94A3B8" fontSize="7" fontWeight="bold">UK 8</text>
          <text x="200" y="74" fill="#94A3B8" fontSize="7" fontWeight="bold">UK 9</text>
          <text x="240" y="74" fill="#94A3B8" fontSize="7" fontWeight="bold">UK 10</text>
          <text x="280" y="74" fill="#94A3B8" fontSize="7" fontWeight="bold">UK 11</text>
          <line x1="10" y1="80" x2="335" y2="80" stroke="#334155" strokeWidth="0.5" />

          {/* Color row 1 */}
          <g transform="translate(0, 86)">
            <text x="18" y="8" fill="#E2E8F0" fontSize="7" fontWeight="bold">Sporty Blue</text>
            <text x="120" y="8" fill="#E2E8F0" fontSize="7">14</text>
            <text x="160" y="8" fill="#E2E8F0" fontSize="7">12</text>
            <text x="200" y="8" fill="#10B981" fontSize="7" fontWeight="bold">32</text>
            <text x="240" y="8" fill="#E2E8F0" fontSize="7">18</text>
            <text x="280" y="8" fill="#E2E8F0" fontSize="7">5</text>
            <line x1="10" y1="16" x2="335" y2="16" stroke="#334155" strokeWidth="0.5" />
          </g>

          {/* Color row 2 */}
          <g transform="translate(0, 108)">
            <text x="18" y="8" fill="#E2E8F0" fontSize="7" fontWeight="bold">Slate Black</text>
            <text x="120" y="8" fill="#E2E8F0" fontSize="7">8</text>
            <text x="160" y="8" fill="#EF4444" fontSize="7" fontWeight="bold">0 (CRIT)</text>
            <text x="200" y="8" fill="#E2E8F0" fontSize="7">15</text>
            <text x="240" y="8" fill="#E2E8F0" fontSize="7">11</text>
            <text x="280" y="8" fill="#E2E8F0" fontSize="7">2</text>
            <line x1="10" y1="16" x2="335" y2="16" stroke="#334155" strokeWidth="0.5" />
          </g>

          {/* Color row 3 */}
          <g transform="translate(0, 130)">
            <text x="18" y="8" fill="#E2E8F0" fontSize="7" fontWeight="bold">White Neon</text>
            <text x="120" y="8" fill="#E2E8F0" fontSize="7">5</text>
            <text x="160" y="8" fill="#E2E8F0" fontSize="7">7</text>
            <text x="200" y="8" fill="#E2E8F0" fontSize="7">10</text>
            <text x="240" y="8" fill="#F59E0B" fontSize="7" fontWeight="bold">3 (LOW)</text>
            <text x="280" y="8" fill="#E2E8F0" fontSize="7">8</text>
            <line x1="10" y1="16" x2="335" y2="16" stroke="#334155" strokeWidth="0.5" />
          </g>

          {/* Actions footer shifted up to y=162 */}
          <g transform="translate(18, 162)">
            <rect width="140" height="24" rx="3" fill="#EF4444" fillOpacity="0.1" stroke="#EF4444" strokeWidth="0.5" />
            <text x="8" y="14" fill="#F87171" fontSize="6">Missing sizes alert activated.</text>

            <rect x="155" y="0" width="144" height="24" rx="3" fill="#6366F1" />
            <text x="227" y="15" fill="#FFFFFF" fontSize="7.5" fontWeight="bold" textAnchor="middle">BULK ORDER MISSING SIZES</text>
          </g>
        </>
      ));

    case 'furniture-home-decor':
      return renderWindowFrame("Furniture Custom Orders Kanban", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Kanban columns Shrunk height to 218 */}
          {/* Col 1 */}
          <g transform="translate(10, 10)">
            <rect width="102" height="218" rx="3" fill="#1E293B" stroke="#334155" />
            <rect width="102" height="18" rx="3" fill="#14B8A6" />
            <text x="51" y="11" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">DESIGN PHASE (3)</text>
            
            {/* Card 1 */}
            <g transform="translate(4, 22)">
              <rect width="94" height="42" rx="3" fill="#0F172A" stroke="#334155" />
              <text x="6" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">L-Shape Sofa Set</text>
              <text x="6" y="24" fill="#94A3B8" fontSize="6">Client: R. K. Varma</text>
              <text x="6" y="34" fill="#14B8A6" fontSize="6" fontWeight="bold">Paid: ₹15,000 Adv</text>
            </g>

            {/* Card 2 */}
            <g transform="translate(4, 66)">
              <rect width="94" height="42" rx="3" fill="#0F172A" stroke="#334155" />
              <text x="6" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">Teak Bed King Size</text>
              <text x="6" y="24" fill="#94A3B8" fontSize="6">Client: Ajay Dev</text>
              <text x="6" y="34" fill="#14B8A6" fontSize="6" fontWeight="bold">Paid: ₹25,000 Adv</text>
            </g>
          </g>

          {/* Col 2 */}
          <g transform="translate(122, 10)">
            <rect width="102" height="218" rx="3" fill="#1E293B" stroke="#334155" />
            <rect width="102" height="18" rx="3" fill="#3B82F6" />
            <text x="51" y="11" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">MANUFACTURING (2)</text>

            {/* Card 1 */}
            <g transform="translate(4, 22)">
              <rect width="94" height="42" rx="3" fill="#0F172A" stroke="#3B82F6" strokeWidth="0.5" />
              <text x="6" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">Dining Table (6s)</text>
              <text x="6" y="24" fill="#94A3B8" fontSize="6">Workshop: Ind Area-1</text>
              <rect x="60" y="27" width="28" height="8" rx="1" fill="#FBBF24" />
              <text x="74" y="33" fill="#0F172A" fontSize="5" fontWeight="bold" textAnchor="middle">POLISHING</text>
            </g>
          </g>

          {/* Col 3 */}
          <g transform="translate(233, 10)">
            <rect width="102" height="218" rx="3" fill="#1E293B" stroke="#334155" />
            <rect width="102" height="18" rx="3" fill="#10B981" />
            <text x="51" y="11" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">DISPATCH READY (2)</text>

            {/* Card 1 */}
            <g transform="translate(4, 22)">
              <rect width="94" height="42" rx="3" fill="#0F172A" stroke="#10B981" strokeWidth="0.5" />
              <text x="6" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">Study Desk Oak</text>
              <text x="6" y="24" fill="#94A3B8" fontSize="6">Driver: Mohan Singh</text>
              <rect x="60" y="27" width="28" height="8" rx="1" fill="#10B981" />
              <text x="74" y="33" fill="#FFFFFF" fontSize="5" fontWeight="bold" textAnchor="middle">OUT BEAT</text>
            </g>
          </g>
        </>
      ));

    case 'fmcg-distribution':
      return renderWindowFrame("FMCG Distribution Route Tracker", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Route Map Area Shrunk height to 130 */}
          <rect x="10" y="8" width="180" height="130" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="22" fill="#E2E8F0" fontSize="8" fontWeight="bold">DELIVERY BEAT GPS TRACKING</text>
          
          {/* Simulated node connector route map shifted up */}
          <g transform="translate(20, 30)">
            <line x1="20" y1="70" x2="60" y2="35" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="60" y1="35" x2="110" y2="80" stroke="#0EA5E9" strokeWidth="3" />
            <line x1="110" y1="80" x2="150" y2="25" stroke="#0EA5E9" strokeWidth="3" />

            <circle cx="20" cy="70" r="5" fill="#4B5563" />
            <text x="20" y="62" fill="#94A3B8" fontSize="5" textAnchor="middle">Depot</text>

            <circle cx="60" cy="35" r="5" fill="#10B981" />
            <text x="60" y="27" fill="#10B981" fontSize="5" textAnchor="middle">Stop 1</text>

            <circle cx="110" cy="80" r="5" fill="#0EA5E9" />
            <text x="110" y="92" fill="#0EA5E9" fontSize="5" textAnchor="middle">Stop 2</text>
          </g>

          {/* Route Info shifted up to y=144, height=84 */}
          <rect x="10" y="144" width="180" height="84" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="158" fill="#E2E8F0" fontSize="7.5" fontWeight="bold">Current Active Beat Info</text>
          <text x="18" y="172" fill="#94A3B8" fontSize="7">Route:</text>
          <text x="80" y="172" fill="#E2E8F0" fontSize="7" fontWeight="bold">Route North-A</text>
          <text x="18" y="186" fill="#94A3B8" fontSize="7">Vehicle Assigned:</text>
          <text x="80" y="186" fill="#E2E8F0" fontSize="7">Tata Ace</text>
          <text x="18" y="200" fill="#94A3B8" fontSize="7">Collections:</text>
          <text x="80" y="200" fill="#EF4444" fontSize="7" fontWeight="bold">₹82,450.00</text>

          {/* Right panel Shrunk height to 220 */}
          <rect x="200" y="8" width="135" height="220" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="208" y="22" fill="#E2E8F0" fontSize="8" fontWeight="bold">WHOLESALER INVOICES</text>
          <line x1="200" y1="30" x2="335" y2="30" stroke="#334155" />

          {/* Invoice 1 */}
          <g transform="translate(206, 38)">
            <rect width="123" height="42" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="6" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">Goyal Retailers</text>
            <text x="6" y="22" fill="#94A3B8" fontSize="6">Inv #IN-9821 • Route A</text>
            <text x="6" y="34" fill="#EF4444" fontSize="7" fontWeight="bold">Due: ₹35,000</text>
          </g>

          {/* Invoice 2 */}
          <g transform="translate(206, 86)">
            <rect width="123" height="42" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="6" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">Aggarwal & Sons</text>
            <text x="6" y="22" fill="#94A3B8" fontSize="6">Inv #IN-9829 • Route A</text>
            <text x="6" y="34" fill="#EF4444" fontSize="7" fontWeight="bold">Due: ₹12,450</text>
          </g>

          {/* Trigger button shifted up to y=185 */}
          <rect x="206" y="195" width="123" height="24" rx="3" fill="#0EA5E9" />
          <text x="267.5" y="210" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">POST ALL COLLECTIONS</text>
        </>
      ));

    case 'garments-apparel':
      return renderWindowFrame("Apparel Alteration Tracker", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Header summary */}
          <g transform="translate(10, 8)">
            <rect width="155" height="40" rx="3" fill="#1E293B" stroke="#334155" />
            <text x="10" y="14" fill="#94A3B8" fontSize="6.5" fontWeight="bold">TAILOR SHOP ASSIGNMENTS</text>
            <text x="10" y="30" fill="#A855F7" fontSize="11" fontWeight="bold">Tailor Mohan (3 jobs)</text>

            <rect x="170" y="0" width="155" height="40" rx="3" fill="#1E293B" stroke="#334155" />
            <text x="180" y="14" fill="#94A3B8" fontSize="6.5" fontWeight="bold">DELIVERY TICKETS PENDING</text>
            <text x="180" y="30" fill="#F59E0B" fontSize="11" fontWeight="bold">05 Alteration Jobs</text>
          </g>

          {/* Alteration Job List Shrunk height to 172 */}
          <rect x="10" y="56" width="325" height="172" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="70" fill="#E2E8F0" fontSize="8" fontWeight="bold">Alteration Job Sheets Pipeline</text>
          <line x1="10" y1="78" x2="335" y2="78" stroke="#334155" />

          {/* Job 1 */}
          <g transform="translate(18, 84)">
            <rect width="309" height="34" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="10" y="14" fill="#E2E8F0" fontSize="7.5" fontWeight="bold">Denim Jeans Alteration</text>
            <text x="10" y="26" fill="#94A3B8" fontSize="6">Job Card: JC-App44  •  Tailor: Mohan  •  Target: Reduce length 2"</text>
            <rect x="250" y="8" width="50" height="16" rx="2" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="0.5" />
            <text x="275" y="18" fill="#10B981" fontSize="6" fontWeight="bold" textAnchor="middle">READY</text>
          </g>

          {/* Job 2 */}
          <g transform="translate(18, 122)">
            <rect width="309" height="34" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="10" y="14" fill="#E2E8F0" fontSize="7.5" fontWeight="bold">Sherwani Custom Gold Stitching</text>
            <text x="10" y="26" fill="#94A3B8" fontSize="6">Job Card: JC-App49  •  Tailor: Rajesh  •  Target: Waist adjustment</text>
            <rect x="250" y="8" width="50" height="16" rx="2" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="0.5" />
            <text x="275" y="18" fill="#F59E0B" fontSize="6" fontWeight="bold" textAnchor="middle">IN WORK</text>
          </g>

          {/* Trigger button shifted up to y=196 */}
          <rect x="18" y="196" width="309" height="22" rx="3" fill="#A855F7" />
          <text x="172.5" y="210" fill="#FFFFFF" fontSize="8.5" fontWeight="bold" textAnchor="middle">CREATE NEW ALTERATION TICKET</text>
        </>
      ));

    case 'home-appliances':
      return renderWindowFrame("Appliance Warranty Service Logs", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Warranty search bar */}
          <rect x="10" y="8" width="325" height="24" rx="3" fill="#1E293B" stroke="#334155" />
          <text x="18" y="24" fill="#94A3B8" fontSize="7">Serial Search:</text>
          <text x="80" y="24" fill="#E2E8F0" fontSize="7.5" fontWeight="bold" fontFamily="monospace">REF-SAMS-928318-D</text>

          {/* Warranty status card Shrunk height to 188 */}
          <rect x="10" y="40" width="160" height="188" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="54" fill="#E2E8F0" fontSize="8" fontWeight="bold">WARRANTY VERIFICATION</text>
          <line x1="10" y1="62" x2="170" y2="62" stroke="#334155" />

          <text x="18" y="74" fill="#94A3B8" fontSize="6.5">PRODUCT NAME</text>
          <text x="18" y="84" fill="#E2E8F0" fontSize="8" fontWeight="bold">Samsung Ref 450L</text>

          <text x="18" y="100" fill="#94A3B8" fontSize="6.5">CUSTOMER LEASE</text>
          <text x="18" y="110" fill="#E2E8F0" fontSize="8" fontWeight="bold">Vijay M. (Ph: 98111...)</text>

          <text x="18" y="126" fill="#94A3B8" fontSize="6.5">EXPIRES ON</text>
          <text x="18" y="136" fill="#10B981" fontSize="9" fontWeight="bold">18/08/2027 (Active)</text>

          {/* Service status indicator shifted up */}
          <rect x="18" y="160" width="144" height="38" rx="3" fill="#0F172A" stroke="#334155" />
          <text x="24" y="172" fill="#94A3B8" fontSize="6" fontWeight="bold">WARRANTY STATUS</text>
          <text x="24" y="188" fill="#10B981" fontSize="9" fontWeight="bold">COMPREHENSIVE COVER</text>

          {/* Service schedule list Shrunk height to 188 */}
          <rect x="180" y="40" width="155" height="188" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="188" y="54" fill="#E2E8F0" fontSize="8" fontWeight="bold">ACTIVE SERVICE TICKETS</text>
          <line x1="180" y1="62" x2="335" y2="62" stroke="#334155" />

          {/* Ticket 1 */}
          <g transform="translate(186, 66)">
            <rect width="143" height="42" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="8" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">Cooling Issue Reported</text>
            <text x="8" y="22" fill="#94A3B8" fontSize="6">Ticket: TK-App10 • Tech: Mohan</text>
            <rect x="8" y="28" width="45" height="10" rx="1" fill="#F59E0B" fillOpacity="0.2" />
            <text x="12" y="35" fill="#F59E0B" fontSize="5" fontWeight="bold">ASSIGNED</text>
          </g>

          {/* Ticket 2 */}
          <g transform="translate(186, 112)">
            <rect width="143" height="42" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="8" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">Installation request</text>
            <text x="8" y="22" fill="#94A3B8" fontSize="6">Ticket: TK-App09 • Tech: Ramesh</text>
            <rect x="8" y="28" width="45" height="10" rx="1" fill="#10B981" fillOpacity="0.2" />
            <text x="12" y="35" fill="#10B981" fontSize="5" fontWeight="bold">RESOLVED</text>
          </g>

          {/* Assign Tech button shifted up to y=195 */}
          <rect x="186" y="195" width="143" height="22" rx="3" fill="#3B82F6" />
          <text x="257.5" y="209" fill="#FFFFFF" fontSize="8.5" fontWeight="bold" textAnchor="middle">SCHEDULE DISPATCH</text>
        </>
      ));

    case 'mobile-accessories':
      return renderWindowFrame("Mobile Store & IMEI Log", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Stats Bar */}
          <g transform="translate(10, 8)">
            <rect width="155" height="40" rx="3" fill="#1E293B" stroke="#334155" />
            <text x="10" y="14" fill="#94A3B8" fontSize="6.5" fontWeight="bold">EMI FINANCE MAPPING</text>
            <text x="10" y="30" fill="#10B981" fontSize="11" fontWeight="bold">HDFC Consumer Loan Approved</text>

            <rect x="170" y="0" width="155" height="40" rx="3" fill="#1E293B" stroke="#334155" />
            <text x="10" y="14" fill="#94A3B8" fontSize="6.5" fontWeight="bold" transform="translate(170, 0)">IMEI SYNC REGISTRY</text>
            <text x="10" y="30" fill="#10B981" fontSize="11" fontWeight="bold" transform="translate(170, 0)">DUAL-IMEI SYNC ACTIVE</text>
          </g>

          {/* Left panel - IMEI info Shrunk height to 172 */}
          <rect x="10" y="56" width="150" height="172" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="70" fill="#E2E8F0" fontSize="8" fontWeight="bold">Device Variant Logs</text>
          <line x1="10" y1="78" x2="160" y2="78" stroke="#334155" />

          <text x="18" y="94" fill="#94A3B8" fontSize="6.5">DEVICE MODEL</text>
          <text x="18" y="104" fill="#E2E8F0" fontSize="8" fontWeight="bold">OnePlus 12 (512GB)</text>

          <text x="18" y="120" fill="#94A3B8" fontSize="6.5">IMEI #1 REGISTERED</text>
          <text x="18" y="130" fill="#E2E8F0" fontSize="7" fontFamily="monospace">864293060192834</text>

          <text x="18" y="146" fill="#94A3B8" fontSize="6.5">WARRANTY MAPPING</text>
          <text x="18" y="156" fill="#10B981" fontSize="8" fontWeight="bold">OnePlus India (12m Cover)</text>

          {/* Right panel - Accessories scanner Shrunk height to 172 */}
          <rect x="170" y="56" width="165" height="172" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="178" y="70" fill="#E2E8F0" fontSize="8" fontWeight="bold">ACCESSORY BARCODE PRINT</text>
          <line x1="170" y1="78" x2="335" y2="78" stroke="#334155" />

          <text x="178" y="94" fill="#94A3B8" fontSize="7">Print barcode for loose case covers</text>
          <path d="M178 110H280" stroke="#E2E8F0" strokeWidth="16" strokeDasharray="2 3 5 1 2 4 1" />
          <text x="178" y="132" fill="#E2E8F0" fontSize="7" fontFamily="monospace">ACC-ONE12-COVER</text>

          {/* Print button shifted up to y=198 */}
          <rect x="178" y="198" width="149" height="22" rx="3" fill="#10B981" />
          <text x="252.5" y="212" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">PRINT BARCODE SHEET</text>
        </>
      ));

    case 'saree-suit-salwar':
      return renderWindowFrame("Saree Suit Salwar Tailoring Hub", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Measurements Form Shrunk height to 220 */}
          <rect x="10" y="8" width="150" height="220" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="24" fill="#E2E8F0" fontSize="8" fontWeight="bold">TAILOR MEASUREMENTS</text>
          <line x1="10" y1="32" x2="160" y2="32" stroke="#334155" />

          <text x="18" y="46" fill="#94A3B8" fontSize="6.5">CUSTOMER: Mrs. Ritu Sen</text>
          
          <g transform="translate(18, 54)">
            <text x="0" y="10" fill="#94A3B8" fontSize="7">Kurti Length:</text>
            <text x="80" y="10" fill="#F43F5E" fontSize="8" fontWeight="bold">42 inches</text>

            <text x="0" y="24" fill="#94A3B8" fontSize="7">Bust line:</text>
            <text x="80" y="24" fill="#E2E8F0" fontSize="8">38 inches</text>

            <text x="0" y="38" fill="#94A3B8" fontSize="7">Waist line:</text>
            <text x="80" y="38" fill="#E2E8F0" fontSize="8">34 inches</text>

            <text x="0" y="52" fill="#94A3B8" fontSize="7">Sleeves length:</text>
            <text x="80" y="52" fill="#E2E8F0" fontSize="8">16 inches</text>
          </g>

          <rect x="18" y="190" width="134" height="22" rx="3" fill="#F43F5E" />
          <text x="85" y="204" fill="#FFFFFF" fontSize="7.5" fontWeight="bold" textAnchor="middle">SAVE JOB CARD [F5]</text>

          {/* Right panel: Fabric Roll stocks Shrunk height to 220 */}
          <rect x="170" y="8" width="165" height="220" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="178" y="24" fill="#E2E8F0" fontSize="8" fontWeight="bold">FABRIC ROLL INVENTORY</text>
          <line x1="170" y1="32" x2="335" y2="32" stroke="#334155" />

          {/* Roll 1 */}
          <g transform="translate(178, 34)">
            <rect width="149" height="34" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="8" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">Banarasi Silk Red Roll #4</text>
            <text x="8" y="24" fill="#10B981" fontSize="6.5">Stock Remaining: 14.5 meters</text>
          </g>

          {/* Roll 2 */}
          <g transform="translate(178, 72)">
            <rect width="149" height="34" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="8" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">Chanderi Cotton Gold Roll #12</text>
            <text x="8" y="24" fill="#10B981" fontSize="6.5">Stock Remaining: 32.0 meters</text>
          </g>

          {/* Agent leaderboard shifted up to y=152 */}
          <rect x="178" y="152" width="149" height="60" rx="3" fill="#0F172A" stroke="#334155" />
          <text x="184" y="165" fill="#94A3B8" fontSize="6" fontWeight="bold">SALES COMMISSION SUMMARY</text>
          <text x="184" y="180" fill="#E2E8F0" fontSize="6.5">Agent Priya:</text>
          <text x="320" y="180" fill="#F43F5E" fontSize="7" fontWeight="bold" textAnchor="end">₹1,840.00</text>
          <text x="184" y="194" fill="#E2E8F0" fontSize="6.5">Agent Anita:</text>
          <text x="320" y="194" fill="#F43F5E" fontSize="7" fontWeight="bold" textAnchor="end">₹1,250.00</text>
        </>
      ));

    case 'toys-gifts':
      return renderWindowFrame("Toys & Gift Combo Builder", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Combo Pack screen Shrunk height to 220 */}
          <rect x="10" y="8" width="160" height="220" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="24" fill="#E2E8F0" fontSize="8" fontWeight="bold">COMBO SET PACK BUILDER</text>
          <line x1="10" y1="32" x2="170" y2="32" stroke="#334155" />

          <text x="18" y="46" fill="#94A3B8" fontSize="6.5">COMBO BUNDLE NAME</text>
          <rect x="18" y="50" width="144" height="15" rx="2" fill="#0F172A" stroke="#334155" />
          <text x="24" y="60" fill="#E2E8F0" fontSize="7">Kids Birthday Pack (Age 5-8)</text>

          {/* Bundle sub-items selection */}
          <text x="18" y="76" fill="#94A3B8" fontSize="6.5">INCLUDED TOYS & ITEMS</text>
          <g transform="translate(18, 82)">
            <rect width="144" height="14" rx="2" fill="#0F172A" />
            <text x="6" y="9" fill="#E2E8F0" fontSize="6.5">✓ Teddy Bear Plush Toy Large</text>
            
            <rect y="18" width="144" height="14" rx="2" fill="#0F172A" />
            <text x="6" y="27" fill="#E2E8F0" fontSize="6.5">✓ Hot Wheels Car Set (3 Pack)</text>

            <rect y="36" width="144" height="14" rx="2" fill="#0F172A" />
            <text x="6" y="45" fill="#E2E8F0" fontSize="6.5">✓ Premium Gift Wrap Box</text>
          </g>

          <rect x="18" y="190" width="144" height="22" rx="3" fill="#2563EB" />
          <text x="90" y="204" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">GENERATE COMBO BARCODE</text>

          {/* Right panel: Dead stock checker Shrunk height to 220 */}
          <rect x="180" y="8" width="155" height="220" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="188" y="24" fill="#E2E8F0" fontSize="8" fontWeight="bold">STOCK AGEING ANALYTICS</text>
          <line x1="180" y1="32" x2="335" y2="32" stroke="#334155" />

          {/* Ageing bars */}
          <text x="188" y="46" fill="#94A3B8" fontSize="6.5">Plush Toys range (Sellers in 90d)</text>
          <rect x="188" y="52" width="139" height="5" rx="3" fill="#0F172A" />
          <rect x="188" y="52" width="125" height="5" rx="3" fill="#10B981" />

          <text x="188" y="68" fill="#94A3B8" fontSize="6.5">Remote Control Cars (Sellers in 90d)</text>
          <rect x="188" y="74" width="139" height="5" rx="3" fill="#0F172A" />
          <rect x="188" y="74" width="84" height="5" rx="3" fill="#2563EB" />

          <text x="188" y="90" fill="#94A3B8" fontSize="6.5">Unsold Board Games (Over 180 Days)</text>
          <rect x="188" y="96" width="139" height="5" rx="3" fill="#0F172A" />
          <rect x="188" y="96" width="42" height="5" rx="3" fill="#EF4444" />

          {/* Discount vouchers shifted up to y=126 */}
          <rect x="188" y="126" width="139" height="88" rx="3" fill="#0F172A" stroke="#334155" />
          <text x="194" y="138" fill="#94A3B8" fontSize="6.5" fontWeight="bold">DISCOUNT VOUCHERS</text>
          
          <rect x="194" y="148" width="127" height="28" rx="2" fill="#1E293B" stroke="#F59E0B" strokeWidth="0.5" />
          <text x="200" y="158" fill="#E2E8F0" fontSize="7" fontWeight="bold">CODE: TOYFEST10</text>
          <text x="200" y="168" fill="#FBBF24" fontSize="6">Get 10% Flat on all board games</text>
        </>
      ));

    case 'vegetables-fruits':
      return renderWindowFrame("Produce Fresh POS Terminal", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Touch Select Buttons Shrunk height to 220 */}
          <rect x="10" y="8" width="200" height="220" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="24" fill="#E2E8F0" fontSize="8" fontWeight="bold">TOUCH QUICK-SELECTION SCREEN</text>
          <line x1="10" y1="32" x2="210" y2="32" stroke="#334155" />

          <g transform="translate(18, 38)">
            {/* Apple button */}
            <rect width="54" height="38" rx="3" fill="#84CC16" fillOpacity="0.2" stroke="#84CC16" strokeWidth="1" />
            <circle cx="27" cy="14" r="6" fill="#EF4444" />
            <text x="27" y="30" fill="#E2E8F0" fontSize="6.5" fontWeight="bold" textAnchor="middle">Apple</text>

            {/* Banana button */}
            <rect x="62" y="0" width="54" height="38" rx="3" fill="#0F172A" stroke="#334155" />
            <circle cx="89" cy="14" r="6" fill="#FBBF24" />
            <text x="89" y="30" fill="#E2E8F0" fontSize="6.5" textAnchor="middle">Banana</text>

            {/* Potato button */}
            <rect x="124" y="0" width="54" height="38" rx="3" fill="#0F172A" stroke="#334155" />
            <circle cx="151" cy="14" r="6" fill="#D97706" />
            <text x="151" y="30" fill="#E2E8F0" fontSize="6.5" textAnchor="middle">Potato</text>

            {/* Onion button */}
            <rect y="48" width="54" height="38" rx="3" fill="#0F172A" stroke="#334155" />
            <circle cx="27" cy="62" r="6" fill="#EC4899" />
            <text x="27" y="78" fill="#E2E8F0" fontSize="6.5" textAnchor="middle">Onion</text>

            {/* Orange button */}
            <rect x="62" y="48" width="54" height="38" rx="3" fill="#0F172A" stroke="#334155" />
            <circle cx="89" cy="62" r="6" fill="#F59E0B" />
            <text x="89" y="78" fill="#E2E8F0" fontSize="6.5" textAnchor="middle">Orange</text>

            {/* Tomato button */}
            <rect x="124" y="48" width="54" height="38" rx="3" fill="#0F172A" stroke="#334155" />
            <circle cx="151" cy="62" r="6" fill="#EF4444" />
            <text x="151" y="78" fill="#E2E8F0" fontSize="6.5" textAnchor="middle">Tomato</text>
          </g>

          {/* Weigh scale readout shifted up to y=170 */}
          <rect x="18" y="170" width="184" height="42" rx="3" fill="#0F172A" stroke="#84CC16" strokeWidth="1" />
          <text x="24" y="182" fill="#84CC16" fontSize="6.5" fontWeight="bold">WEIGHING SCALE API CONNECTED</text>
          <text x="24" y="204" fill="#E2E8F0" fontSize="16" fontWeight="bold" fontFamily="monospace">1.450 kg</text>

          {/* Right panel: fresh wastage logs Shrunk height to 220 */}
          <rect x="220" y="8" width="115" height="220" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="228" y="24" fill="#E2E8F0" fontSize="8" fontWeight="bold">PERISHABLE TRACKER</text>
          <line x1="220" y1="32" x2="335" y2="32" stroke="#334155" />

          {/* Wastage parameters */}
          <text x="228" y="44" fill="#94A3B8" fontSize="6.5">Spoilage target:</text>
          <text x="327" y="44" fill="#E2E8F0" fontSize="6.5" textAnchor="end">3.00%</text>

          <text x="228" y="58" fill="#EF4444" fontSize="6.5" fontWeight="bold">Dump loss:</text>
          <text x="327" y="58" fill="#EF4444" fontSize="6.5" fontWeight="bold" textAnchor="end">4.82%</text>

          {/* Rate lists shifted up */}
          <rect x="226" y="78" width="103" height="66" rx="3" fill="#0F172A" stroke="#334155" />
          <text x="232" y="90" fill="#84CC16" fontSize="6" fontWeight="bold">HOURLY RATES</text>
          
          <text x="232" y="106" fill="#94A3B8" fontSize="6.5">Morning Rate:</text>
          <text x="323" y="106" fill="#E2E8F0" fontSize="6.5" textAnchor="end">₹120/kg</text>

          <text x="232" y="120" fill="#94A3B8" fontSize="6.5">Evening Clearance:</text>
          <text x="323" y="120" fill="#10B981" fontSize="6.5" fontWeight="bold" textAnchor="end">₹80/kg</text>

          {/* Trigger evening discount rates shifted up to y=190 */}
          <rect x="226" y="190" width="103" height="22" rx="3" fill="#84CC16" />
          <text x="277.5" y="204" fill="#FFFFFF" fontSize="7.5" fontWeight="bold" textAnchor="middle">APPLY CLEARANCE</text>
        </>
      ));

    case 'wine-shop':
      return renderWindowFrame("Wine Daily Excise Books", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Excise Compliance Bar */}
          <rect x="10" y="8" width="325" height="22" rx="3" fill="#1E293B" stroke="#334155" />
          <circle cx="20" cy="19" r="3" fill="#10B981" />
          <text x="28" y="21" fill="#E2E8F0" fontSize="7.5" fontWeight="bold">STATE EXCISE LICENSE STATUS: VALID (FL-3)</text>

          {/* Excise table grid Shrunk height to 190 */}
          <rect x="10" y="38" width="325" height="190" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="52" fill="#E2E8F0" fontSize="8" fontWeight="bold">DAILY EXCISE REGISTER (FORM FL-6)</text>
          <line x1="10" y1="58" x2="335" y2="58" stroke="#334155" />

          {/* Table headers */}
          <text x="18" y="70" fill="#94A3B8" fontSize="6.5" fontWeight="bold">ITEM BRAND</text>
          <text x="120" y="70" fill="#94A3B8" fontSize="6.5" fontWeight="bold">SIZE</text>
          <text x="160" y="70" fill="#94A3B8" fontSize="6.5" fontWeight="bold">OPENING</text>
          <text x="210" y="70" fill="#94A3B8" fontSize="6.5" fontWeight="bold">RECEIPTS</text>
          <text x="260" y="70" fill="#94A3B8" fontSize="6.5" fontWeight="bold">SALES</text>
          <text x="310" y="70" fill="#94A3B8" fontSize="6.5" fontWeight="bold" textAnchor="end">CLOSING</text>
          <line x1="10" y1="76" x2="335" y2="76" stroke="#334155" />

          {/* Row 1 shifted up */}
          <g transform="translate(0, 80)">
            <text x="18" y="8" fill="#E2E8F0" fontSize="6.5">Royal Stag Whisky</text>
            <text x="120" y="8" fill="#E2E8F0" fontSize="6.5">750ml</text>
            <text x="160" y="8" fill="#E2E8F0" fontSize="6.5">144</text>
            <text x="210" y="8" fill="#10B981" fontSize="6.5" fontWeight="bold">48</text>
            <text x="260" y="8" fill="#E2E8F0" fontSize="6.5">92</text>
            <text x="310" y="8" fill="#E2E8F0" fontSize="6.5" textAnchor="end">100</text>
            <line x1="10" y1="14" x2="335" y2="14" stroke="#334155" strokeWidth="0.5" />
          </g>

          {/* Row 2 shifted up */}
          <g transform="translate(0, 102)">
            <text x="18" y="8" fill="#E2E8F0" fontSize="6.5">Budweiser Strong Beer</text>
            <text x="120" y="8" fill="#E2E8F0" fontSize="6.5">650ml</text>
            <text x="160" y="8" fill="#E2E8F0" fontSize="6.5">520</text>
            <text x="210" y="8" fill="#E2E8F0" fontSize="6.5">0</text>
            <text x="260" y="8" fill="#E2E8F0" fontSize="6.5">240</text>
            <text x="310" y="8" fill="#E2E8F0" fontSize="6.5" textAnchor="end">280</text>
            <line x1="10" y1="14" x2="335" y2="14" stroke="#334155" strokeWidth="0.5" />
          </g>

          {/* Row 3 shifted up */}
          <g transform="translate(0, 124)">
            <text x="18" y="8" fill="#E2E8F0" fontSize="6.5">Sula Shiraz Red Wine</text>
            <text x="120" y="8" fill="#E2E8F0" fontSize="6.5">750ml</text>
            <text x="160" y="8" fill="#E2E8F0" fontSize="6.5">24</text>
            <text x="210" y="8" fill="#10B981" fontSize="6.5" fontWeight="bold">12</text>
            <text x="260" y="8" fill="#E2E8F0" fontSize="6.5">8</text>
            <text x="310" y="8" fill="#E2E8F0" fontSize="6.5" textAnchor="end">28</text>
            <line x1="10" y1="14" x2="335" y2="14" stroke="#334155" strokeWidth="0.5" />
          </g>

          {/* Drawer controls shifted up to y=170 */}
          <g transform="translate(18, 170)">
            <rect width="140" height="42" rx="3" fill="#0F172A" stroke="#334155" />
            <text x="8" y="12" fill="#94A3B8" fontSize="5.5" fontWeight="bold">SHIFT LOCK STATUS</text>
            <text x="8" y="26" fill="#7C3AED" fontSize="10" fontWeight="bold">₹94,180.00</text>
            <circle cx="130" cy="24" r="3" fill="#10B981" />

            <rect x="155" y="0" width="144" height="42" rx="3" fill="#7C3AED" />
            <text x="227" y="18" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">EXPORT DAILY EXCISE</text>
            <text x="227" y="30" fill="#E2E8F0" fontSize="6" textAnchor="middle">FORM FL-6 REPORTS</text>
          </g>
        </>
      ));

    case 'erp-supermarket':
      return renderWindowFrame("Enterprise Supermarket HO Dashboard", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Top Panel - Logistics Map Shrunk height to 130 */}
          <rect x="10" y="8" width="180" height="130" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="22" fill="#E2E8F0" fontSize="8" fontWeight="bold">CENTRAL HO STOCK LOGISTICS MAP</text>

          {/* Node sync graphics shifted up */}
          <g transform="translate(20, 30)">
            <line x1="80" y1="50" x2="30" y2="20" stroke="#EF4E5D" strokeWidth="2" />
            <line x1="80" y1="50" x2="130" y2="20" stroke="#EF4E5D" strokeWidth="2" />
            <line x1="80" y1="50" x2="30" y2="80" stroke="#EF4E5D" strokeWidth="2" />
            <line x1="80" y1="50" x2="130" y2="80" stroke="#EF4E5D" strokeWidth="2" />

            <circle cx="80" cy="50" r="10" fill="#EF4E5D" />
            <text x="80" y="53" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">HO</text>

            <circle cx="30" cy="20" r="5" fill="#10B981" />
            <text x="30" y="12" fill="#94A3B8" fontSize="5.5" textAnchor="middle">Noida</text>

            <circle cx="130" cy="20" r="5" fill="#10B981" />
            <text x="130" y="12" fill="#94A3B8" fontSize="5.5" textAnchor="middle">Delhi</text>
          </g>

          {/* Inter branch transfers shifted up to y=144, height=84 */}
          <rect x="10" y="144" width="180" height="84" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="158" fill="#E2E8F0" fontSize="7.5" fontWeight="bold">HQ Central Purchase Orders</text>
          <text x="18" y="172" fill="#94A3B8" fontSize="7">Vendor:</text>
          <text x="85" y="172" fill="#E2E8F0" fontSize="7">Nestle India</text>
          <text x="18" y="186" fill="#94A3B8" fontSize="7">Purchase:</text>
          <text x="85" y="186" fill="#EF4E5D" fontSize="8" fontWeight="bold">₹8,50,000</text>

          {/* Right panel - Branch requisitions Shrunk height to 220 */}
          <rect x="200" y="8" width="135" height="220" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="208" y="22" fill="#E2E8F0" fontSize="8" fontWeight="bold">BRANCH STOCK REQS</text>
          <line x1="200" y1="30" x2="335" y2="30" stroke="#334155" />

          {/* Requisition 1 */}
          <g transform="translate(206, 34)">
            <rect width="123" height="42" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="6" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">Noida BO (Req #921)</text>
            <text x="6" y="22" fill="#94A3B8" fontSize="6">Item: Maggi Noodles (100 Cases)</text>
            <rect x="6" y="28" width="50" height="10" rx="1.5" fill="#EF4444" fillOpacity="0.2" />
            <text x="10" y="35" fill="#F87171" fontSize="5" fontWeight="bold">PENDING HO DISPATCH</text>
          </g>

          {/* Requisition 2 */}
          <g transform="translate(206, 80)">
            <rect width="123" height="42" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="6" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">Gurgaon BO (Req #918)</text>
            <text x="6" y="22" fill="#94A3B8" fontSize="6">Item: Coke Cans (50 Cases)</text>
            <rect x="6" y="28" width="50" height="10" rx="1.5" fill="#10B981" fillOpacity="0.2" />
            <text x="10" y="35" fill="#10B981" fontSize="5" fontWeight="bold">IN TRANSIT</text>
          </g>

          {/* Dispatch all button shifted up to y=185 */}
          <rect x="206" y="190" width="123" height="24" rx="3" fill="#EF4E5D" />
          <text x="267.5" y="205" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">DISPATCH ALL STOCKS</text>
        </>
      ));

    case 'erp-auto-parts':
      return renderWindowFrame("Franchise Supply-Chain Dispatch", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Franchise Credit locks Shrunk height to 220 */}
          <rect x="10" y="8" width="150" height="220" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="24" fill="#E2E8F0" fontSize="8" fontWeight="bold">CREDIT LOCK CONTROL</text>
          <line x1="10" y1="32" x2="160" y2="32" stroke="#334155" />

          {/* Credit status cards */}
          <g transform="translate(18, 40)">
            <text x="0" y="10" fill="#94A3B8" fontSize="6.5">Active Wholesaler:</text>
            <text x="0" y="20" fill="#E2E8F0" fontSize="7.5" fontWeight="bold">Sharma Auto (Noida)</text>
            <text x="0" y="32" fill="#94A3B8" fontSize="6.5">Current Ledger Outstanding:</text>
            <text x="0" y="44" fill="#EF4444" fontSize="9" fontWeight="bold">₹5.42 L (EXCEEDED)</text>

            <rect y="58" width="124" height="26" rx="3" fill="#EF4444" fillOpacity="0.2" stroke="#EF4444" strokeWidth="0.5" />
            <text x="62" y="71" fill="#F87171" fontSize="7.5" fontWeight="bold" textAnchor="middle">CREDIT BILLING LOCKED</text>
          </g>

          <rect x="18" y="190" width="134" height="22" rx="3" fill="#EF4444" />
          <text x="85" y="204" fill="#FFFFFF" fontSize="7.5" fontWeight="bold" textAnchor="middle">RELEASE LOCK [ADMIN]</text>

          {/* Right panel: Bulk Invoices matcher Shrunk height to 220 */}
          <rect x="170" y="8" width="165" height="220" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="178" y="24" fill="#E2E8F0" fontSize="8" fontWeight="bold">WHOLESALER BILLS MATCH</text>
          <line x1="170" y1="32" x2="335" y2="32" stroke="#334155" />

          {/* Invoices list */}
          <g transform="translate(178, 34)">
            <rect width="149" height="34" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="8" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">Clutch Plate Assy (50)</text>
            <text x="8" y="24" fill="#10B981" fontSize="6.5">E-Invoice #INV-2901 Ok</text>
          </g>

          <g transform="translate(178, 72)">
            <rect width="149" height="34" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="8" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">Shock Absorbers (100)</text>
            <text x="8" y="24" fill="#10B981" fontSize="6.5">E-Invoice #INV-2909 Ok</text>
          </g>

          {/* E invoice generation summary shifted up */}
          <rect x="178" y="146" width="149" height="68" rx="3" fill="#0F172A" stroke="#334155" />
          <text x="184" y="158" fill="#94A3B8" fontSize="6" fontWeight="bold">GST E-INVOICING PORTAL</text>
          <text x="184" y="174" fill="#10B981" fontSize="7" fontWeight="bold">IRN STATUS: GENERATED</text>
          <text x="184" y="186" fill="#E2E8F0" fontSize="6" fontFamily="monospace">82938a10928be92019...</text>
        </>
      ));

    case 'erp-pharmacy':
      return renderWindowFrame("Central Pharmacy Drug Compliance HO", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Compliance stats */}
          <g transform="translate(10, 8)">
            <rect width="155" height="40" rx="3" fill="#1E293B" stroke="#334155" />
            <text x="10" y="14" fill="#94A3B8" fontSize="6.5" fontWeight="bold">DRUG LICENSE VALIDATION (HO)</text>
            <text x="10" y="30" fill="#10B981" fontSize="11" fontWeight="bold">DL-20B, DL-21B ACTIVE</text>

            <rect x="170" y="0" width="155" height="40" rx="3" fill="#1E293B" stroke="#334155" />
            <text x="10" y="14" fill="#94A3B8" fontSize="6.5" fontWeight="bold" transform="translate(170, 0)">COMPLIANCE REPORT ENGINE</text>
            <text x="10" y="30" fill="#10B981" fontSize="10" fontWeight="bold" transform="translate(170, 0)">CLOUDBACKUP SYNCED OK</text>
          </g>

          {/* Left panel - License statuses Shrunk height to 172 */}
          <rect x="10" y="56" width="150" height="172" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="70" fill="#E2E8F0" fontSize="8" fontWeight="bold">Retail Branch Licenses</text>
          <line x1="10" y1="78" x2="160" y2="78" stroke="#334155" />

          <text x="18" y="94" fill="#E2E8F0" fontSize="7" fontWeight="bold">Noida Sector-18 Branch</text>
          <rect x="18" y="100" width="45" height="10" rx="2" fill="#10B981" fillOpacity="0.2" />
          <text x="22" y="107" fill="#10B981" fontSize="5.5" fontWeight="bold">DL ACTIVE</text>

          <text x="18" y="124" fill="#E2E8F0" fontSize="7" fontWeight="bold">Gurgaon Cybercity Branch</text>
          <rect x="18" y="130" width="45" height="10" rx="2" fill="#EF4444" fillOpacity="0.2" stroke="#EF4444" strokeWidth="0.5" />
          <text x="22" y="137" fill="#EF4444" fontSize="5.5" fontWeight="bold">EXPIRING IN 3D</text>

          {/* Right panel - Inter branch batch transfers Shrunk height to 172 */}
          <rect x="170" y="56" width="165" height="172" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="178" y="70" fill="#E2E8F0" fontSize="8" fontWeight="bold">STOCK TRANSFER MATRIX</text>
          <line x1="170" y1="78" x2="335" y2="78" stroke="#334155" />

          {/* Transfer 1 */}
          <g transform="translate(178, 88)">
            <rect width="149" height="32" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="8" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">Insulin Actrapid (20 vials)</text>
            <text x="8" y="24" fill="#10B981" fontSize="6.5">HO Depot → Gurgaon Branch Ok</text>
          </g>

          {/* Transfer 2 */}
          <g transform="translate(178, 128)">
            <rect width="149" height="32" rx="2" fill="#0F172A" stroke="#334155" />
            <text x="8" y="12" fill="#E2E8F0" fontSize="7" fontWeight="bold">Amoxicillin (50 strips)</text>
            <text x="8" y="24" fill="#10B981" fontSize="6.5">Noida Branch → Delhi Branch Ok</text>
          </g>

          {/* Central purchase dispatch shifted up to y=198 */}
          <rect x="178" y="198" width="149" height="22" rx="3" fill="#22C55E" />
          <text x="252.5" y="212" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">INITIATE STOCK TRANSFER</text>
        </>
      ));

    case 'erp-multi-location':
      return renderWindowFrame("Multi-Location Branch Node Monitor", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />

          {/* Synced terminal nodes map Shrunk height to 220 */}
          <rect x="10" y="8" width="150" height="220" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="18" y="24" fill="#E2E8F0" fontSize="8" fontWeight="bold">BRANCH NODE PINGS</text>
          <line x1="10" y1="32" x2="160" y2="32" stroke="#334155" />

          {/* Node 1 */}
          <g transform="translate(18, 40)">
            <circle cx="5" cy="5" r="4" fill="#10B981" />
            <text x="16" y="8" fill="#E2E8F0" fontSize="7.5" fontWeight="bold">Noida Sect-18 Node</text>
            <text x="16" y="18" fill="#94A3B8" fontSize="6.5">Ping: 12ms  •  ONLINE</text>
          </g>

          {/* Node 2 */}
          <g transform="translate(18, 72)">
            <circle cx="5" cy="5" r="4" fill="#10B981" />
            <text x="16" y="8" fill="#E2E8F0" fontSize="7.5" fontWeight="bold">Delhi CP Node</text>
            <text x="16" y="18" fill="#94A3B8" fontSize="6.5">Ping: 22ms  •  ONLINE</text>
          </g>

          {/* Node 3 */}
          <g transform="translate(18, 104)">
            <circle cx="5" cy="5" r="4" fill="#F59E0B" />
            <text x="16" y="8" fill="#E2E8F0" fontSize="7.5" fontWeight="bold">Gurgaon Cybercity</text>
            <text x="16" y="18" fill="#F59E0B" fontSize="6.5">Sync: 18 pending bills</text>
          </g>

          {/* Node 4 */}
          <g transform="translate(18, 136)">
            <circle cx="5" cy="5" r="4" fill="#EF4444" />
            <text x="16" y="8" fill="#E2E8F0" fontSize="7.5" fontWeight="bold">Faridabad Main Store</text>
            <text x="16" y="18" fill="#EF4444" fontSize="6.5">Sync State: OFFLINE</text>
          </g>

          {/* Sync status chart Shrunk height to 220 */}
          <rect x="170" y="8" width="165" height="220" rx="4" fill="#1E293B" stroke="#334155" />
          <text x="178" y="24" fill="#E2E8F0" fontSize="8" fontWeight="bold">REAL-TIME DATA SYNC FLOW</text>
          <line x1="170" y1="32" x2="335" y2="32" stroke="#334155" />

          {/* Progress bar shifted up to y=44 */}
          <text x="178" y="44" fill="#94A3B8" fontSize="7">Consolidated Branch Sync progress:</text>
          <rect x="178" y="52" width="149" height="12" rx="3" fill="#0F172A" stroke="#334155" />
          <rect x="178" y="52" width="126" height="12" rx="3" fill="#06B6D4" />
          <text x="252.5" y="61" fill="#FFFFFF" fontSize="7.5" fontWeight="bold" textAnchor="middle">85% COMPLETE</text>

          {/* Consolidate status metrics shifted up */}
          <g transform="translate(178, 70)">
            <rect width="149" height="110" rx="3" fill="#0F172A" stroke="#334155" />
            
            <text x="8" y="16" fill="#94A3B8" fontSize="6.5" fontWeight="bold">LAST CONSOLIDATED BILLS</text>
            <text x="8" y="30" fill="#E2E8F0" fontSize="7.5">Total Sales: ₹45,12,800</text>
            <text x="8" y="44" fill="#E2E8F0" fontSize="7.5">Total GST: ₹8,12,450</text>
            
            <line x1="0" y1="56" x2="149" y2="56" stroke="#334155" />
            
            <text x="8" y="70" fill="#10B981" fontSize="7" fontWeight="bold">ONLINE SERVER: ACTIVE</text>
            <text x="8" y="84" fill="#94A3B8" fontSize="6.5">Backup Drive: Google Cloud Sync</text>
          </g>

          {/* Re-sync button shifted up to y=190 */}
          <rect x="178" y="190" width="149" height="22" rx="3" fill="#06B6D4" />
          <text x="252.5" y="204" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">FORCED RESYNC DATA</text>
        </>
      ));

    default:
      // Fallback dashboard
      return renderWindowFrame("Reckon Application Console", color, (
        <>
          <rect x="0" y="0" width="345" height="272" fill="#0F172A" />
          <rect x="10" y="8" width="325" height="220" rx="4" fill="#1E293B" stroke="#334155" />
          
          {/* Tech lines grid overlay */}
          <g opacity="0.15" stroke="#94A3B8" strokeWidth="0.5">
            <line x1="30" y1="20" x2="300" y2="20" />
            <line x1="30" y1="60" x2="300" y2="60" />
            <line x1="30" y1="100" x2="300" y2="100" />
            <line x1="30" y1="140" x2="300" y2="140" />
            <line x1="30" y1="180" x2="300" y2="180" />
            <line x1="60" y1="10" x2="60" y2="240" />
            <line x1="120" y1="10" x2="120" y2="240" />
            <line x1="180" y1="10" x2="180" y2="240" />
            <line x1="240" y1="10" x2="240" y2="240" />
          </g>

          <g transform="translate(60, 50)">
            <rect width="225" height="120" rx="6" fill="#0F172A" stroke={color} strokeWidth="1.5" />
            
            {/* Inner display layout */}
            <circle cx="112.5" cy="40" r="20" fill={color} fillOpacity="0.15" />
            <path
              d="M104.5 40L110.5 46L120.5 32"
              stroke={color}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            <text x="112.5" y="80" fill="#E2E8F0" fontSize="11" fontWeight="bold" textAnchor="middle">
              Reckon ERP Ready
            </text>
            <text x="112.5" y="96" fill="#94A3B8" fontSize="8" textAnchor="middle">
              Module initialized successfully.
            </text>
          </g>
        </>
      ));
  }
}
