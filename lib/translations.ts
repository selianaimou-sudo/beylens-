export type Language = "ar" | "en" | "de" | "fr" | "es" | "it";

export const languages: { code: Language; name: string; nativeName: string; dir: "rtl" | "ltr" }[] = [
  { code: "ar", name: "Arabic", nativeName: "العربية", dir: "rtl" },
  { code: "en", name: "English", nativeName: "English", dir: "ltr" },
  { code: "de", name: "German", nativeName: "Deutsch", dir: "ltr" },
  { code: "fr", name: "French", nativeName: "Français", dir: "ltr" },
  { code: "es", name: "Spanish", nativeName: "Español", dir: "ltr" },
  { code: "it", name: "Italian", nativeName: "Italiano", dir: "ltr" },
];

export const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.categories": "الفئات",
    "nav.howItWorks": "كيف يعمل",
    "nav.about": "عن بايلنز",
    "nav.contact": "تواصل معنا",
    
    // Hero
    "hero.title": "قارن الأسعار بذكاء",
    "hero.subtitle": "اكتشف أفضل الأسعار من آلاف المتاجر الأوروبية بقوة الذكاء الاصطناعي",
    "hero.searchPlaceholder": "ابحث عن منتج... (مثال: iPhone 15, Nike Air Max)",
    "hero.searchButton": "بحث",
    "hero.stats.stores": "متجر",
    "hero.stats.countries": "دولة أوروبية",
    "hero.stats.savings": "توفير المستخدمين",
    
    // Categories
    "categories.title": "تصفح الفئات",
    "categories.subtitle": "اختر فئة لاستكشاف أفضل العروض",
    "categories.electronics": "إلكترونيات",
    "categories.fashion": "أزياء",
    "categories.makeup": "مكياج",
    "categories.accessories": "إكسسوارات",
    "categories.perfumes": "عطور",
    "categories.home": "منزل وحديقة",
    "categories.travel": "سفر",
    "categories.insurance": "تأمين",
    "categories.internet": "عقود إنترنت",
    "categories.digital": "اشتراكات رقمية",
    
    // Search Results
    "results.title": "نتائج البحث",
    "results.showing": "عرض",
    "results.resultsFor": "نتائج لـ",
    "results.sortBy": "ترتيب حسب",
    "results.sortCheapest": "الأرخص أولاً",
    "results.sortExpensive": "الأغلى أولاً",
    "results.sortRating": "التقييم الأعلى",
    "results.noResults": "لم يتم العثور على نتائج",
    "results.tryAgain": "جرب البحث بكلمات مختلفة",
    "results.apiMessage": "الأسعار الحية تتطلب اتصال API",
    "results.sampleData": "بيانات تجريبية للعرض",
    
    // Price Card
    "price.originalPrice": "السعر الأصلي",
    "price.serviceFee": "رسوم الخدمة",
    "price.totalPrice": "السعر الإجمالي",
    "price.savings": "توفير",
    "price.buyNow": "اشتر الآن",
    "price.viewDeal": "عرض العرض",
    "price.trustScore": "نقاط الثقة",
    "price.inStock": "متوفر",
    "price.outOfStock": "غير متوفر",
    "price.freeShipping": "شحن مجاني",
    
    // Service Fee
    "serviceFee.title": "رسوم الخدمة الشفافة",
    "serviceFee.subtitle": "رسوم بسيطة وثابتة بدون مفاجآت",
    "serviceFee.tier1": "للمنتجات من 1€ إلى 10€",
    "serviceFee.tier2": "للمنتجات من 10€ إلى 100€",
    "serviceFee.tier3": "للمنتجات من 100€ إلى 1000€",
    "serviceFee.tier4": "للمنتجات أكثر من 1000€",
    
    // Trust
    "trust.title": "لماذا تثق بنا؟",
    "trust.verified": "متاجر موثقة",
    "trust.secure": "دفع آمن",
    "trust.support": "دعم 24/7",
    "trust.guarantee": "ضمان أفضل سعر",
    
    // Footer
    "footer.description": "منصة مقارنة الأسعار الذكية للعرب في أوروبا",
    "footer.links": "روابط سريعة",
    "footer.legal": "قانوني",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الاستخدام",
    "footer.cookies": "سياسة ملفات تعريف الارتباط",
    "footer.rights": "جميع الحقوق محفوظة",
    
    // CTA
    "cta.title": "ابدأ التوفير اليوم",
    "cta.subtitle": "انضم إلى آلاف المستخدمين الذين يوفرون المال يومياً",
    "cta.button": "ابدأ البحث مجاناً",
    
    // Common
    "common.loading": "جاري التحميل...",
    "common.error": "حدث خطأ",
    "common.close": "إغلاق",
    "common.filter": "تصفية",
    "common.clearFilters": "مسح الفلاتر",
    "common.allCategories": "جميع الفئات",
  },
  
  en: {
    // Header
    "nav.home": "Home",
    "nav.categories": "Categories",
    "nav.howItWorks": "How It Works",
    "nav.about": "About",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "Compare Prices Smartly",
    "hero.subtitle": "Discover the best prices from thousands of European stores powered by AI",
    "hero.searchPlaceholder": "Search for a product... (e.g., iPhone 15, Nike Air Max)",
    "hero.searchButton": "Search",
    "hero.stats.stores": "Stores",
    "hero.stats.countries": "European Countries",
    "hero.stats.savings": "User Savings",
    
    // Categories
    "categories.title": "Browse Categories",
    "categories.subtitle": "Choose a category to explore the best deals",
    "categories.electronics": "Electronics",
    "categories.fashion": "Fashion",
    "categories.makeup": "Makeup",
    "categories.accessories": "Accessories",
    "categories.perfumes": "Perfumes",
    "categories.home": "Home & Garden",
    "categories.travel": "Travel",
    "categories.insurance": "Insurance",
    "categories.internet": "Internet Contracts",
    "categories.digital": "Digital Subscriptions",
    
    // Search Results
    "results.title": "Search Results",
    "results.showing": "Showing",
    "results.resultsFor": "results for",
    "results.sortBy": "Sort by",
    "results.sortCheapest": "Cheapest First",
    "results.sortExpensive": "Most Expensive First",
    "results.sortRating": "Highest Rating",
    "results.noResults": "No results found",
    "results.tryAgain": "Try searching with different keywords",
    "results.apiMessage": "Real-time prices require API connection",
    "results.sampleData": "Sample data for demonstration",
    
    // Price Card
    "price.originalPrice": "Original Price",
    "price.serviceFee": "Service Fee",
    "price.totalPrice": "Total Price",
    "price.savings": "Savings",
    "price.buyNow": "Buy Now",
    "price.viewDeal": "View Deal",
    "price.trustScore": "Trust Score",
    "price.inStock": "In Stock",
    "price.outOfStock": "Out of Stock",
    "price.freeShipping": "Free Shipping",
    
    // Service Fee
    "serviceFee.title": "Transparent Service Fees",
    "serviceFee.subtitle": "Simple, fixed fees with no surprises",
    "serviceFee.tier1": "For products €1 to €10",
    "serviceFee.tier2": "For products €10 to €100",
    "serviceFee.tier3": "For products €100 to €1000",
    "serviceFee.tier4": "For products over €1000",
    
    // Trust
    "trust.title": "Why Trust Us?",
    "trust.verified": "Verified Stores",
    "trust.secure": "Secure Payment",
    "trust.support": "24/7 Support",
    "trust.guarantee": "Best Price Guarantee",
    
    // Footer
    "footer.description": "Smart price comparison platform for Arabs in Europe",
    "footer.links": "Quick Links",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.cookies": "Cookie Policy",
    "footer.rights": "All rights reserved",
    
    // CTA
    "cta.title": "Start Saving Today",
    "cta.subtitle": "Join thousands of users who save money daily",
    "cta.button": "Start Searching Free",
    
    // Common
    "common.loading": "Loading...",
    "common.error": "An error occurred",
    "common.close": "Close",
    "common.filter": "Filter",
    "common.clearFilters": "Clear Filters",
    "common.allCategories": "All Categories",
  },
  
  de: {
    // Header
    "nav.home": "Startseite",
    "nav.categories": "Kategorien",
    "nav.howItWorks": "So funktioniert es",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",
    
    // Hero
    "hero.title": "Preise intelligent vergleichen",
    "hero.subtitle": "Entdecken Sie die besten Preise aus tausenden europäischen Geschäften mit KI",
    "hero.searchPlaceholder": "Produkt suchen... (z.B. iPhone 15, Nike Air Max)",
    "hero.searchButton": "Suchen",
    "hero.stats.stores": "Geschäfte",
    "hero.stats.countries": "Europäische Länder",
    "hero.stats.savings": "Nutzerersparnisse",
    
    // Categories
    "categories.title": "Kategorien durchsuchen",
    "categories.subtitle": "Wählen Sie eine Kategorie für die besten Angebote",
    "categories.electronics": "Elektronik",
    "categories.fashion": "Mode",
    "categories.makeup": "Make-up",
    "categories.accessories": "Accessoires",
    "categories.perfumes": "Parfums",
    "categories.home": "Haus & Garten",
    "categories.travel": "Reisen",
    "categories.insurance": "Versicherung",
    "categories.internet": "Internetverträge",
    "categories.digital": "Digitale Abonnements",
    
    // Search Results
    "results.title": "Suchergebnisse",
    "results.showing": "Zeige",
    "results.resultsFor": "Ergebnisse für",
    "results.sortBy": "Sortieren nach",
    "results.sortCheapest": "Günstigste zuerst",
    "results.sortExpensive": "Teuerste zuerst",
    "results.sortRating": "Höchste Bewertung",
    "results.noResults": "Keine Ergebnisse gefunden",
    "results.tryAgain": "Versuchen Sie es mit anderen Suchbegriffen",
    "results.apiMessage": "Echtzeit-Preise erfordern API-Verbindung",
    "results.sampleData": "Beispieldaten zur Demonstration",
    
    // Price Card
    "price.originalPrice": "Originalpreis",
    "price.serviceFee": "Servicegebühr",
    "price.totalPrice": "Gesamtpreis",
    "price.savings": "Ersparnis",
    "price.buyNow": "Jetzt kaufen",
    "price.viewDeal": "Angebot ansehen",
    "price.trustScore": "Vertrauenspunkte",
    "price.inStock": "Auf Lager",
    "price.outOfStock": "Nicht verfügbar",
    "price.freeShipping": "Kostenloser Versand",
    
    // Service Fee
    "serviceFee.title": "Transparente Servicegebühren",
    "serviceFee.subtitle": "Einfache, feste Gebühren ohne Überraschungen",
    "serviceFee.tier1": "Für Produkte von 1€ bis 10€",
    "serviceFee.tier2": "Für Produkte von 10€ bis 100€",
    "serviceFee.tier3": "Für Produkte von 100€ bis 1000€",
    "serviceFee.tier4": "Für Produkte über 1000€",
    
    // Trust
    "trust.title": "Warum uns vertrauen?",
    "trust.verified": "Verifizierte Geschäfte",
    "trust.secure": "Sichere Zahlung",
    "trust.support": "24/7 Support",
    "trust.guarantee": "Bestpreisgarantie",
    
    // Footer
    "footer.description": "Intelligente Preisvergleichsplattform für Araber in Europa",
    "footer.links": "Schnelllinks",
    "footer.legal": "Rechtliches",
    "footer.privacy": "Datenschutz",
    "footer.terms": "Nutzungsbedingungen",
    "footer.cookies": "Cookie-Richtlinie",
    "footer.rights": "Alle Rechte vorbehalten",
    
    // CTA
    "cta.title": "Heute anfangen zu sparen",
    "cta.subtitle": "Schließen Sie sich Tausenden an, die täglich Geld sparen",
    "cta.button": "Kostenlos suchen",
    
    // Common
    "common.loading": "Laden...",
    "common.error": "Ein Fehler ist aufgetreten",
    "common.close": "Schließen",
    "common.filter": "Filtern",
    "common.clearFilters": "Filter löschen",
    "common.allCategories": "Alle Kategorien",
  },
  
  fr: {
    // Header
    "nav.home": "Accueil",
    "nav.categories": "Catégories",
    "nav.howItWorks": "Comment ça marche",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "Comparez les prix intelligemment",
    "hero.subtitle": "Découvrez les meilleurs prix de milliers de magasins européens grâce à l'IA",
    "hero.searchPlaceholder": "Rechercher un produit... (ex: iPhone 15, Nike Air Max)",
    "hero.searchButton": "Rechercher",
    "hero.stats.stores": "Magasins",
    "hero.stats.countries": "Pays européens",
    "hero.stats.savings": "Économies utilisateurs",
    
    // Categories
    "categories.title": "Parcourir les catégories",
    "categories.subtitle": "Choisissez une catégorie pour explorer les meilleures offres",
    "categories.electronics": "Électronique",
    "categories.fashion": "Mode",
    "categories.makeup": "Maquillage",
    "categories.accessories": "Accessoires",
    "categories.perfumes": "Parfums",
    "categories.home": "Maison & Jardin",
    "categories.travel": "Voyage",
    "categories.insurance": "Assurance",
    "categories.internet": "Contrats Internet",
    "categories.digital": "Abonnements numériques",
    
    // Search Results
    "results.title": "Résultats de recherche",
    "results.showing": "Affichage de",
    "results.resultsFor": "résultats pour",
    "results.sortBy": "Trier par",
    "results.sortCheapest": "Moins cher d'abord",
    "results.sortExpensive": "Plus cher d'abord",
    "results.sortRating": "Meilleure note",
    "results.noResults": "Aucun résultat trouvé",
    "results.tryAgain": "Essayez avec d'autres mots-clés",
    "results.apiMessage": "Les prix en temps réel nécessitent une connexion API",
    "results.sampleData": "Données d'exemple pour démonstration",
    
    // Price Card
    "price.originalPrice": "Prix d'origine",
    "price.serviceFee": "Frais de service",
    "price.totalPrice": "Prix total",
    "price.savings": "Économies",
    "price.buyNow": "Acheter",
    "price.viewDeal": "Voir l'offre",
    "price.trustScore": "Score de confiance",
    "price.inStock": "En stock",
    "price.outOfStock": "Rupture de stock",
    "price.freeShipping": "Livraison gratuite",
    
    // Service Fee
    "serviceFee.title": "Frais de service transparents",
    "serviceFee.subtitle": "Frais simples et fixes sans surprises",
    "serviceFee.tier1": "Pour les produits de 1€ à 10€",
    "serviceFee.tier2": "Pour les produits de 10€ à 100€",
    "serviceFee.tier3": "Pour les produits de 100€ à 1000€",
    "serviceFee.tier4": "Pour les produits de plus de 1000€",
    
    // Trust
    "trust.title": "Pourquoi nous faire confiance ?",
    "trust.verified": "Magasins vérifiés",
    "trust.secure": "Paiement sécurisé",
    "trust.support": "Support 24/7",
    "trust.guarantee": "Garantie meilleur prix",
    
    // Footer
    "footer.description": "Plateforme de comparaison de prix intelligente pour les Arabes en Europe",
    "footer.links": "Liens rapides",
    "footer.legal": "Mentions légales",
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions d'utilisation",
    "footer.cookies": "Politique des cookies",
    "footer.rights": "Tous droits réservés",
    
    // CTA
    "cta.title": "Commencez à économiser aujourd'hui",
    "cta.subtitle": "Rejoignez des milliers d'utilisateurs qui économisent chaque jour",
    "cta.button": "Rechercher gratuitement",
    
    // Common
    "common.loading": "Chargement...",
    "common.error": "Une erreur s'est produite",
    "common.close": "Fermer",
    "common.filter": "Filtrer",
    "common.clearFilters": "Effacer les filtres",
    "common.allCategories": "Toutes les catégories",
  },
  
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.categories": "Categorías",
    "nav.howItWorks": "Cómo funciona",
    "nav.about": "Acerca de",
    "nav.contact": "Contacto",
    
    // Hero
    "hero.title": "Compara precios inteligentemente",
    "hero.subtitle": "Descubre los mejores precios de miles de tiendas europeas con IA",
    "hero.searchPlaceholder": "Buscar un producto... (ej: iPhone 15, Nike Air Max)",
    "hero.searchButton": "Buscar",
    "hero.stats.stores": "Tiendas",
    "hero.stats.countries": "Países europeos",
    "hero.stats.savings": "Ahorros de usuarios",
    
    // Categories
    "categories.title": "Explorar categorías",
    "categories.subtitle": "Elige una categoría para explorar las mejores ofertas",
    "categories.electronics": "Electrónica",
    "categories.fashion": "Moda",
    "categories.makeup": "Maquillaje",
    "categories.accessories": "Accesorios",
    "categories.perfumes": "Perfumes",
    "categories.home": "Hogar y Jardín",
    "categories.travel": "Viajes",
    "categories.insurance": "Seguros",
    "categories.internet": "Contratos de Internet",
    "categories.digital": "Suscripciones digitales",
    
    // Search Results
    "results.title": "Resultados de búsqueda",
    "results.showing": "Mostrando",
    "results.resultsFor": "resultados para",
    "results.sortBy": "Ordenar por",
    "results.sortCheapest": "Más barato primero",
    "results.sortExpensive": "Más caro primero",
    "results.sortRating": "Mayor valoración",
    "results.noResults": "No se encontraron resultados",
    "results.tryAgain": "Intenta buscar con otras palabras",
    "results.apiMessage": "Los precios en tiempo real requieren conexión API",
    "results.sampleData": "Datos de muestra para demostración",
    
    // Price Card
    "price.originalPrice": "Precio original",
    "price.serviceFee": "Tarifa de servicio",
    "price.totalPrice": "Precio total",
    "price.savings": "Ahorro",
    "price.buyNow": "Comprar ahora",
    "price.viewDeal": "Ver oferta",
    "price.trustScore": "Puntuación de confianza",
    "price.inStock": "En stock",
    "price.outOfStock": "Agotado",
    "price.freeShipping": "Envío gratis",
    
    // Service Fee
    "serviceFee.title": "Tarifas de servicio transparentes",
    "serviceFee.subtitle": "Tarifas simples y fijas sin sorpresas",
    "serviceFee.tier1": "Para productos de 1€ a 10€",
    "serviceFee.tier2": "Para productos de 10€ a 100€",
    "serviceFee.tier3": "Para productos de 100€ a 1000€",
    "serviceFee.tier4": "Para productos de más de 1000€",
    
    // Trust
    "trust.title": "¿Por qué confiar en nosotros?",
    "trust.verified": "Tiendas verificadas",
    "trust.secure": "Pago seguro",
    "trust.support": "Soporte 24/7",
    "trust.guarantee": "Garantía de mejor precio",
    
    // Footer
    "footer.description": "Plataforma de comparación de precios inteligente para árabes en Europa",
    "footer.links": "Enlaces rápidos",
    "footer.legal": "Legal",
    "footer.privacy": "Política de privacidad",
    "footer.terms": "Términos de uso",
    "footer.cookies": "Política de cookies",
    "footer.rights": "Todos los derechos reservados",
    
    // CTA
    "cta.title": "Empieza a ahorrar hoy",
    "cta.subtitle": "Únete a miles de usuarios que ahorran dinero cada día",
    "cta.button": "Buscar gratis",
    
    // Common
    "common.loading": "Cargando...",
    "common.error": "Se produjo un error",
    "common.close": "Cerrar",
    "common.filter": "Filtrar",
    "common.clearFilters": "Limpiar filtros",
    "common.allCategories": "Todas las categorías",
  },
  
  it: {
    // Header
    "nav.home": "Home",
    "nav.categories": "Categorie",
    "nav.howItWorks": "Come funziona",
    "nav.about": "Chi siamo",
    "nav.contact": "Contatti",
    
    // Hero
    "hero.title": "Confronta i prezzi intelligentemente",
    "hero.subtitle": "Scopri i migliori prezzi da migliaia di negozi europei con l'IA",
    "hero.searchPlaceholder": "Cerca un prodotto... (es: iPhone 15, Nike Air Max)",
    "hero.searchButton": "Cerca",
    "hero.stats.stores": "Negozi",
    "hero.stats.countries": "Paesi europei",
    "hero.stats.savings": "Risparmi utenti",
    
    // Categories
    "categories.title": "Sfoglia le categorie",
    "categories.subtitle": "Scegli una categoria per esplorare le migliori offerte",
    "categories.electronics": "Elettronica",
    "categories.fashion": "Moda",
    "categories.makeup": "Trucco",
    "categories.accessories": "Accessori",
    "categories.perfumes": "Profumi",
    "categories.home": "Casa e Giardino",
    "categories.travel": "Viaggi",
    "categories.insurance": "Assicurazioni",
    "categories.internet": "Contratti Internet",
    "categories.digital": "Abbonamenti digitali",
    
    // Search Results
    "results.title": "Risultati della ricerca",
    "results.showing": "Mostrando",
    "results.resultsFor": "risultati per",
    "results.sortBy": "Ordina per",
    "results.sortCheapest": "Più economico prima",
    "results.sortExpensive": "Più costoso prima",
    "results.sortRating": "Valutazione più alta",
    "results.noResults": "Nessun risultato trovato",
    "results.tryAgain": "Prova a cercare con altre parole",
    "results.apiMessage": "I prezzi in tempo reale richiedono connessione API",
    "results.sampleData": "Dati di esempio per dimostrazione",
    
    // Price Card
    "price.originalPrice": "Prezzo originale",
    "price.serviceFee": "Commissione di servizio",
    "price.totalPrice": "Prezzo totale",
    "price.savings": "Risparmio",
    "price.buyNow": "Acquista ora",
    "price.viewDeal": "Vedi offerta",
    "price.trustScore": "Punteggio di fiducia",
    "price.inStock": "Disponibile",
    "price.outOfStock": "Non disponibile",
    "price.freeShipping": "Spedizione gratuita",
    
    // Service Fee
    "serviceFee.title": "Commissioni di servizio trasparenti",
    "serviceFee.subtitle": "Commissioni semplici e fisse senza sorprese",
    "serviceFee.tier1": "Per prodotti da 1€ a 10€",
    "serviceFee.tier2": "Per prodotti da 10€ a 100€",
    "serviceFee.tier3": "Per prodotti da 100€ a 1000€",
    "serviceFee.tier4": "Per prodotti oltre 1000€",
    
    // Trust
    "trust.title": "Perché fidarsi di noi?",
    "trust.verified": "Negozi verificati",
    "trust.secure": "Pagamento sicuro",
    "trust.support": "Supporto 24/7",
    "trust.guarantee": "Garanzia miglior prezzo",
    
    // Footer
    "footer.description": "Piattaforma di confronto prezzi intelligente per arabi in Europa",
    "footer.links": "Link rapidi",
    "footer.legal": "Legale",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Termini di utilizzo",
    "footer.cookies": "Cookie Policy",
    "footer.rights": "Tutti i diritti riservati",
    
    // CTA
    "cta.title": "Inizia a risparmiare oggi",
    "cta.subtitle": "Unisciti a migliaia di utenti che risparmiano ogni giorno",
    "cta.button": "Cerca gratis",
    
    // Common
    "common.loading": "Caricamento...",
    "common.error": "Si è verificato un errore",
    "common.close": "Chiudi",
    "common.filter": "Filtra",
    "common.clearFilters": "Cancella filtri",
    "common.allCategories": "Tutte le categorie",
  },
};
