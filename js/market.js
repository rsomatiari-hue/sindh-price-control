// Sindh Market Committees Master Database (By Divisions)
const marketCommittees = {
    "Karachi Division": [
        { id: "karachi", name: "مارکیٹ کمیٹی کراچی" }
    ],
    "Hyderabad Division": [
        { id: "hyderabad", name: "مارکیٹ کمیٹی حیدرآباد" },
        { id: "badin", name: "مارکیٹ کمیٹی بدین (Taluka Badin)" },
        { id: "matli", name: "مارکیٹ کمیٹی ماتلی (Taluka Matli)" },
        { id: "tando_bago", name: "مارکیٹ کمیٹی ٹنڈو باگو" },
        { id: "thatta", name: "مارکیٹ کمیٹی ٹھٹہ (Taluka Thatta)" },
        { id: "mirpur_sakro", name: "مارکیٹ کمیٹی میرپور ساکرو" },
        { id: "sujawal", name: "مارکیٹ کمیٹی سجاول (Taluka Sujawal)" },
        { id: "dadu", name: "مارکیٹ کمیٹی دادو (Taluka Dadu)" },
        { id: "mehar", name: "مارکیٹ کمیٹی میہڑ" },
        { id: "kn_shah", name: "مارکیٹ کمیٹی خیرپور ناتھن شاہ" },
        { id: "kotri", name: "مارکیٹ کمیٹی جامشورو (Kotri)" },
        { id: "sehwan", name: "مارکیٹ کمیٹی سہون" },
        { id: "matiari", name: "مارکیٹ کمیٹی مٹیاری" },
        { id: "hala", name: "مارکیٹ کمیٹی ہالا" },
        { id: "tando_allahyar", name: "مارکیٹ کمیٹی ٹنڈو الہ یار" },
        { id: "tando_mohammad_khan", name: "مارکیٹ کمیٹی ٹنڈو محمد خان" }
    ],
    "Sukkur Division": [
        { id: "sukkur", name: "مارکیٹ کمیٹی سکھر (Taluka Sukkur)" },
        { id: "rohri", name: "مارکیٹ کمیٹی روہڑی" },
        { id: "panno_aqil", name: "مارکیٹ کمیٹی پنوعاقل" },
        { id: "khairpur", name: "مارکیٹ کمیٹی خیرپور (Taluka Khairpur)" },
        { id: "gambat", name: "مارکیٹ کمیٹی گمبٹ" },
        { id: "kot_diji", name: "مارکیٹ کمیٹی کوٹ ڈیجی" },
        { id: "ghotki", name: "مارکیٹ کمیٹی گھوٹکی (Taluka Ghotki)" },
        { id: "daharki", name: "مارکیٹ کمیٹی ڈہرکی" },
        { id: "mirpur_mathelo", name: "مارکیٹ کمیٹی میرپور ماتھیلو" }
    ],
    "Larkana Division": [
        { id: "larkana", name: "مارکیٹ کمیٹی لاڑکانہ (Taluka Larkana)" },
        { id: "ratodero", name: "مارکیٹ کمیٹی رتوڈیرو" },
        { id: "shikarpur", name: "مارکیٹ کمیٹی شکارپور (Taluka Shikarpur)" },
        { id: "lakhi_ghulam_shah", name: "مارکیٹ کمیٹی لکھی غلام شاہ" },
        { id: "jacobabad", name: "مارکیٹ کمیٹی جیکب آباد (Taluka Jacobabad)" },
        { id: "thul", name: "مارکیٹ کمیٹی ٹھل" },
        { id: "kandhkot", name: "مارکیٹ کمیٹی کشمور (Taluka Kandhkot)" },
        { id: "qambar", name: "مارکیٹ کمیٹی قنبر (Taluka Qambar)" },
        { id: "shahdadkot", name: "مارکیٹ کمیٹی شہدادکوٹ" }
    ],
    "Mirpurkhas Division": [
        { id: "mirpurkhas", name: "مارکیٹ کمیٹی میرپورخاص (Taluka Mirpurkhas)" },
        { id: "digri", name: "مارکیٹ کمیٹی ڈگری" },
        { id: "kot_ghulam_mohammad", name: "مارکیٹ کمیٹی کوٹ غلام محمد" },
        { id: "umerkot", name: "مارکیٹ کمیٹی عمرکوٹ" },
        { id: "kunri", name: "مارکیٹ کمیٹی کنری" },
        { id: "mithi", name: "مارکیٹ کمیٹی تھرپارکر (Mithi)" }
    ],
    "Shaheed Benazirabad Division": [
        { id: "nawabshah", name: "مارکیٹ کمیٹی نوابشاہ (Taluka SBA)" },
        { id: "sakrand", name: "مارکیٹ کمیٹی سکرنڈ" },
        { id: "kazi_ahmed", name: "مارکیٹ کمیٹی قاضی احمد (Taluka Kazi Ahmed)" },
        { id: "daur", name: "مارکیٹ کمیٹی دوڑ (Taluka Daur)" },
        { id: "sanghar", name: "مارکیٹ کمیٹی سانگھڑ (Taluka Sanghar)" },
        { id: "shahdadpur", name: "مارکیٹ کمیٹی شہدادپور" },
        { id: "tando_adam", name: "مارکیٹ کمیٹی ٹنڈو آدم" },
        { id: "naushahro_feroze", name: "مارکیٹ کمیٹی نوشہرو فیروز (Taluka N.Feroze)" },
        { id: "moro", name: "مارکیٹ کمیٹی مورو" },
        { id: "kandiaro", name: "مارکیٹ کمیٹی کنڈیارو" }
    ]
};
