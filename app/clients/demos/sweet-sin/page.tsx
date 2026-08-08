import type { Metadata } from "next"
import Image from "next/image"
import { Assistant, Frank_Ruhl_Libre } from "next/font/google"
import {
  ArrowUpLeft,
  Camera,
  Check,
  ChevronDown,
  Clock3,
  Heart,
  MapPin,
  MessageCircle,
  Sparkles,
  Wheat,
} from "lucide-react"

const whatsappUrl =
  "https://wa.me/972558874826?text=%D7%94%D7%99%D7%99%20%D7%9E%D7%90%D7%99%D7%94%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%94%D7%96%D7%9E%D7%99%D7%9F%20%F0%9F%8D%B0"
const catalogUrl = "https://wa.me/c/972558874826"

const assistant = Assistant({
  variable: "--font-body",
  subsets: ["hebrew", "latin"],
  display: "swap",
})

const frankRuhl = Frank_Ruhl_Libre({
  variable: "--font-display",
  subsets: ["hebrew", "latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Sweet Sin 124 | עוגות מעוצבות וקינוחים בראשון לציון",
  description:
    "עוגות מעוצבות, עוגיות, מארזים וקינוחים בעבודת יד בראשון לציון — כולל אפשרויות ללא גלוטן. צפו בקטלוג והזמינו מראש בוואטסאפ.",
  keywords: [
    "עוגות מעוצבות ראשון לציון",
    "עוגת יום הולדת ראשון לציון",
    "קינוחים ראשון לציון",
    "עוגות ללא גלוטן ראשון לציון",
    "מארזי קינוחים",
    "Sweet Sin 124",
  ],
  authors: [{ name: "Sweet Sin 124" }],
  creator: "Sweet Sin 124",
  category: "food",
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: "Sweet Sin 124",
    title: "Sweet Sin 124 | אפייה מהלב בראשון לציון",
    description: "עוגות מעוצבות, עוגיות וקינוחים בעבודת יד — כולל אפשרויות ללא גלוטן.",
    images: [
      {
        url: "/sweet-sin/custom-cake.webp",
        width: 1200,
        height: 1200,
        alt: "עוגה מעוצבת של Sweet Sin 124",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweet Sin 124 | עוגות וקינוחים בראשון לציון",
    description: "אפייה מהלב, עיצוב אישי וטעם שלא שוכחים.",
    images: ["/sweet-sin/custom-cake.webp"],
  },
}

const catalog = [
  {
    number: "01",
    title: "עוגות מעוצבות",
    description:
      "עוגות יום הולדת בהתאמה אישית — צבע, קונספט, כיתוב וכל הפרטים הקטנים שהופכים אותן לבלתי נשכחות.",
    image: "/sweet-sin/custom-cake.webp",
    alt: "עוגת יום הולדת מעוצבת וצבעונית של Sweet Sin 124",
  },
  {
    number: "02",
    title: "עוגיות ומאפים",
    description:
      "מגולגלות, ביסקוטי, עוגות שמרים, בראוניז ועוגיות מושחתות — בדיוק לצד הקפה או למארז מתנה.",
    image: "/sweet-sin/rolled-cookies.webp",
    alt: "מגולגלות שוקולד בעבודת יד של Sweet Sin 124",
  },
  {
    number: "03",
    title: "קינוחים אישיים",
    description:
      "פחזניות, קאפקייקס וקינוחים אישיים לאירוח, לשולחן מתוקים או לרגע שבו פשוט בא משהו טוב.",
    image: "/sweet-sin/lemon-treats.webp",
    alt: "קינוחים אישיים מצופים שוקולד לבן ולימון",
  },
]

const gallery = [
  {
    image: "/sweet-sin/smores-cookie.webp",
    alt: "עוגיית סמורס עם שוקולד ומרשמלו",
    label: "עוגיות סמורס",
    className: "gallery-tall",
  },
  {
    image: "/sweet-sin/brownies.webp",
    alt: "בראוניז שוקולד עשירים",
    label: "בראוניז שוקולד",
    className: "gallery-wide",
  },
  {
    image: "/sweet-sin/cinnamon-box.webp",
    alt: "מארז מאפי קינמון ממותגים",
    label: "מארזים מתוקים",
    className: "",
  },
  {
    image: "/sweet-sin/rolled-cookies.webp",
    alt: "מגולגלות שוקולד טריות",
    label: "מגולגלות",
    className: "",
  },
]

const schema = {
  "@context": "https://schema.org",
  "@type": ["Bakery", "LocalBusiness"],
  name: "Sweet Sin 124",
  alternateName: "סוויט סין 124",
  description:
    "עוגות מעוצבות, עוגיות, מאפים וקינוחים בעבודת יד, כולל אפשרויות ללא גלוטן. איסוף מראשון לציון ובהזמנה מראש.",
  image: "/sweet-sin/custom-cake.webp",
  telephone: "+972-55-887-4826",
  priceRange: "₪₪",
  address: {
    "@type": "PostalAddress",
    addressLocality: "ראשון לציון",
    addressCountry: "IL",
  },
  areaServed: "ראשון לציון והסביבה",
  sameAs: ["https://www.instagram.com/sweet_sin_124/"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "קטלוג קינוחים",
    itemListElement: [
      { "@type": "OfferCatalog", name: "עוגות מעוצבות" },
      { "@type": "OfferCatalog", name: "עוגיות ומאפים" },
      { "@type": "OfferCatalog", name: "קינוחים ללא גלוטן" },
      { "@type": "OfferCatalog", name: "מארזים מתוקים" },
    ],
  },
}

export default function Home() {
  return (
    <div
      className={`sweet-sin-site ${assistant.variable} ${frankRuhl.variable}`}
      lang="he"
      dir="rtl"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sweet Sin 124 — דף הבית">
          <Image
            src="/sweet-sin/logo.webp"
            alt="לוגו Sweet Sin 124"
            width={58}
            height={58}
            priority
          />
          <span>
            <strong>SWEET SIN 124</strong>
            <small>אפייה מהלב</small>
          </span>
        </a>

        <nav aria-label="ניווט ראשי">
          <a href="#catalog">מה בתפריט</a>
          <a href="#gluten-free">ללא גלוטן</a>
          <a href="#how-to-order">איך מזמינים</a>
          <a href="#faq">שאלות</a>
        </nav>

        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          דברו איתי
        </a>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <div className="eyebrow reveal reveal-1">
              <span className="eyebrow-dot" />
              נאפה מהלב · נאסף מראשון לציון
            </div>
            <h1 className="reveal reveal-2">
              הקינוח שכולם
              <span> ידברו עליו.</span>
            </h1>
            <p className="hero-lead reveal reveal-3">
              עוגות מעוצבות, עוגיות וקינוחים בעבודת יד — מחומרי גלם איכותיים,
              עם המון אופי ועם תשומת לב לכל ביס.
            </p>
            <div className="hero-actions reveal reveal-4">
              <a className="button button-primary" href={catalogUrl} target="_blank" rel="noreferrer">
                לצפייה בקטלוג
                <ArrowUpLeft size={19} />
              </a>
              <a className="button button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={19} />
                בואו נתכנן משהו מתוק
              </a>
            </div>
            <ul className="hero-notes reveal reveal-4" aria-label="פרטי הזמנה חשובים">
              <li><Check size={15} /> הזמנה מראש</li>
              <li><MapPin size={15} /> איסוף מראשל״צ</li>
              <li><Wheat size={15} /> גם ללא גלוטן</li>
            </ul>
          </div>

          <div className="hero-visual reveal reveal-2">
            <div className="hero-image-wrap">
              <Image
                src="/sweet-sin/custom-cake.webp"
                alt="עוגה מעוצבת בצבעי כחול, ורוד וצהוב של Sweet Sin 124"
                fill
                priority
                sizes="(max-width: 900px) 92vw, 46vw"
              />
            </div>
            <div className="hero-stamp" aria-hidden="true">
              <span>100%</span>
              <small>HANDMADE</small>
            </div>
            <div className="hero-card">
              <Heart size={22} fill="currentColor" />
              <span><strong>אפייה מהלב</strong>בדיוק כמו שביקשתם</span>
            </div>
            <span className="scribble scribble-one" aria-hidden="true">מתוק</span>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div>
            <span>עוגות מעוצבות</span><Sparkles size={16} />
            <span>קינוחים אישיים</span><Sparkles size={16} />
            <span>מארזים מתוקים</span><Sparkles size={16} />
            <span>עוגיות ומאפים</span><Sparkles size={16} />
            <span>אפשרויות ללא גלוטן</span><Sparkles size={16} />
            <span>עוגות מעוצבות</span><Sparkles size={16} />
          </div>
        </div>

        <section className="catalog-section section-shell" id="catalog">
          <div className="section-heading">
            <div>
              <span className="kicker">הקטלוג המתוק</span>
              <h2>יש כאן משהו לכל חשק.</h2>
            </div>
            <p>
              מחגיגה גדולה ועד קפה של שישי — כל הזמנה נאפית בעבודת יד ומקבלת את הזמן שמגיע לה.
            </p>
          </div>

          <div className="catalog-grid">
            {catalog.map((item) => (
              <article className="catalog-card" key={item.title}>
                <div className="catalog-image">
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 92vw, 30vw" />
                  <span>{item.number}</span>
                </div>
                <div className="catalog-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={catalogUrl} target="_blank" rel="noreferrer">
                    לקטלוג המלא <ArrowUpLeft size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="gluten-section" id="gluten-free">
          <div className="gluten-photo">
            <Image
              src="/sweet-sin/rolled-cookies.webp"
              alt="מגולגלות נוטלה ללא גלוטן"
              fill
              sizes="(max-width: 850px) 100vw, 50vw"
            />
            <div className="photo-note">גם הטעם קיבל תשומת לב</div>
          </div>
          <div className="gluten-copy">
            <span className="kicker kicker-light">בלי גלוטן, עם כל הכיף</span>
            <h2>לא מתפשרים על הביס.</h2>
            <p>
              בקטלוג תמצאו גם עוגות שוקולד, מגולגלות, עוגיות וקינוחים ללא גלוטן — כדי שגם מי שנמנע מגלוטן יוכל ליהנות באמת.
            </p>
            <ul>
              <li><Check size={18} /> מגוון פריטים מסומנים בקטלוג</li>
              <li><Check size={18} /> התאמה אישית לעוגות חגיגה</li>
              <li><Check size={18} /> תיאום מלא לפני ההזמנה</li>
            </ul>
            <a className="text-link-light" href={whatsappUrl} target="_blank" rel="noreferrer">
              ספרו לי מה אתם צריכים <ArrowUpLeft size={18} />
            </a>
            <small>
              חשוב: המטבח אינו סביבה סטרילית מגלוטן. במקרה של אלרגיה או צליאק, יש לציין זאת לפני ההזמנה ולוודא התאמה אישית.
            </small>
          </div>
        </section>

        <section className="gallery-section section-shell" aria-labelledby="gallery-title">
          <div className="section-heading gallery-heading">
            <div>
              <span className="kicker">מהתנור ומהאינסטגרם</span>
              <h2 id="gallery-title">קצת ממה שקורה כאן.</h2>
            </div>
            <a href="https://www.instagram.com/sweet_sin_124/" target="_blank" rel="noreferrer">
              <Camera size={19} /> @sweet_sin_124
            </a>
          </div>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <figure className={item.className} key={item.label}>
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 92vw, 31vw" />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="process-section section-shell" id="how-to-order">
          <div className="process-intro">
            <span className="kicker">פשוט להזמין</span>
            <h2>שלושה צעדים<br />לביס הראשון.</h2>
            <p>ההזמנה נסגרת ישירות מול מאיה בוואטסאפ — בלי טפסים ובלי סימני שאלה.</p>
          </div>
          <ol className="process-list">
            <li>
              <span>1</span>
              <div><h3>בוחרים כיוון</h3><p>שולחים תאריך, סוג קינוח, כמות ורעיון כללי.</p></div>
              <MessageCircle size={26} />
            </li>
            <li>
              <span>2</span>
              <div><h3>מדייקים יחד</h3><p>מסכמים עיצוב, טעמים, התאמות ומחיר.</p></div>
              <Sparkles size={26} />
            </li>
            <li>
              <span>3</span>
              <div><h3>אוספים ונהנים</h3><p>מגיעים בזמן שתיאמנו לאיסוף מראשון לציון.</p></div>
              <MapPin size={26} />
            </li>
          </ol>
        </section>

        <section className="quote-section">
          <div className="quote-mark" aria-hidden="true">“</div>
          <p>אצלי כל קינוח מתחיל באהבה<br />ומסתיים בחיוך.</p>
          <span>— מאיה, Sweet Sin 124</span>
        </section>

        <section className="faq-section section-shell" id="faq">
          <div className="faq-intro">
            <span className="kicker">שאלתם, עניתי</span>
            <h2>לפני שמזמינים</h2>
            <p>לא מצאתם תשובה? הודעה קצרה בוואטסאפ ונפתור הכול.</p>
          </div>
          <div className="faq-list">
            <details>
              <summary>איך מזמינים עוגה מעוצבת בראשון לציון?<ChevronDown size={20} /></summary>
              <p>שולחים בוואטסאפ תאריך, מספר סועדים והשראה לעיצוב. לאחר תיאום הטעמים, העיצוב והמחיר — מאשרים את ההזמנה.</p>
            </details>
            <details>
              <summary>כמה זמן מראש כדאי להזמין?<ChevronDown size={20} /></summary>
              <p>הכול מיוצר בהזמנה מראש ובהתאם לזמינות. לעוגה מעוצבת או הזמנה גדולה מומלץ לפנות מוקדם ככל האפשר.</p>
            </details>
            <details>
              <summary>יש עוגות וקינוחים ללא גלוטן?<ChevronDown size={20} /></summary>
              <p>כן. בקטלוג יש מגוון פריטים ללא גלוטן. המטבח אינו סטרילי מגלוטן, לכן במקרה של אלרגיה או צליאק חשוב לעדכן לפני ההזמנה.</p>
            </details>
            <details>
              <summary>מאיפה אוספים את ההזמנה?<ChevronDown size={20} /></summary>
              <p>האיסוף הוא מראשון לציון, בשעה ובמיקום שנמסרים לאחר סגירת ההזמנה.</p>
            </details>
          </div>
        </section>

        <section className="final-cta section-shell">
          <div className="final-logo">
            <Image src="/sweet-sin/logo.webp" alt="" fill sizes="180px" />
          </div>
          <div>
            <span className="kicker kicker-light">יש לכם סיבה לחגוג?</span>
            <h2>בואו נכין לה משהו<br />שאי אפשר לשכוח.</h2>
          </div>
          <a className="button button-cream" href={whatsappUrl} target="_blank" rel="noreferrer">
            מתחילים הזמנה <MessageCircle size={20} />
          </a>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <strong>SWEET SIN 124</strong>
          <span>עוגות · עוגיות · קינוחים · אפייה מהלב</span>
        </div>
        <div className="footer-links">
          <a href="https://www.instagram.com/sweet_sin_124/" target="_blank" rel="noreferrer"><Camera size={17} /> אינסטגרם</a>
          <a href={catalogUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} /> קטלוג</a>
          <span><MapPin size={17} /> ראשון לציון</span>
          <span><Clock3 size={17} /> בתיאום מראש</span>
        </div>
        <p>© {new Date().getFullYear()} Sweet Sin 124</p>
      </footer>

      <a className="mobile-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
        <MessageCircle size={20} /> להזמנה בוואטסאפ
      </a>
    </div>
  )
}
