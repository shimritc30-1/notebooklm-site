import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Chrome, Users, Star, ExternalLink, Info, CheckCircle2, HelpCircle, Target, Lightbulb, BookOpen, MessageSquare, Upload, Zap, ArrowLeftRight, Sparkles, Copy, BrainCircuit, Pencil, Globe, FileText, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = () => (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.95 }}
    className="relative inline-block group cursor-pointer mb-12"
  >
    {/* Refined Glow effect */}
    <div className="absolute -inset-16 bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-yellow-500/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-all duration-1000" />
    
    <div className="relative flex flex-col items-center">
      <div className="flex items-center gap-4 mb-3">
        <div className="relative">
          <div className="absolute -inset-2 bg-fuchsia-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          <BrainCircuit className="w-12 h-12 text-fuchsia-400 group-hover:text-fuchsia-300 transition-all duration-500" />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5] 
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-1 -right-1"
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </motion.div>
        </div>
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
        <div className="flex flex-col items-start">
          <span className="text-3xl font-black tracking-tighter text-white group-hover:text-fuchsia-200 transition-colors duration-500 drop-shadow-[0_0_15px_rgba(192,38,211,0.5)]">
            SHIMRIT COHEN SHAY
          </span>
          <span className="text-[10px] font-bold tracking-[0.4em] text-fuchsia-400/80 uppercase">
            AI Innovation & Magic
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

const PromptLibrary = () => {
  const [copiedId, setCopiedId] = useState(null);
  
  const prompts = [
    { title: 'ניתוח קשרים', prompt: 'זהה את הקשרים המרכזיים בין המקורות השונים שהעליתי והסבר כיצד הם משלימים אחד את השני.' },
    { title: 'יצירת בוחן', prompt: 'צור בוחן אמריקאי של 5 שאלות המבוסס על המידע במחברת, כולל תשובות והסברים.' },
    { title: 'סיכום מנהלים', prompt: 'כתוב סיכום מנהלים תמציתי של כל המקורות, תוך התמקדות ב-3 התובנות החשובות ביותר.' },
    { title: 'מפת דרכים', prompt: 'על בסיס המידע במחברת, בנה מפת דרכים (Roadmap) ליישום הרעיונות המרכזיים שהועלו.' }
  ];

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="pt-24">
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-500/10 blur-[120px] -z-10" />
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-bold mb-6 border border-yellow-500/20 shadow-lg shadow-yellow-500/5">
          <Sparkles className="w-4 h-4" />
          ערך מוסף: ספריית קסם
        </div>
        <h2 className="text-4xl md:text-5xl font-black serif-title mb-6 text-white tracking-tight">פרומפטים מוכנים לעבודה</h2>
        <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">העתיקו והדביקו ב-NotebookLM כדי לקבל תוצאות מדהימות ברגע</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {prompts.map((p, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-8 organic-card group relative flex flex-col h-full"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 group-hover:bg-fuchsia-500 group-hover:text-white transition-all duration-300">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => copyToClipboard(p.prompt, i)}
                className="p-2.5 rounded-xl bg-slate-800/50 hover:bg-yellow-500/20 text-slate-400 hover:text-yellow-400 transition-all border border-white/5 hover:border-yellow-500/30"
              >
                {copiedId === i ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </motion.button>
            </div>
            <h3 className="text-xl font-black text-white mb-4 group-hover:text-fuchsia-300 transition-colors">
              {p.title}
            </h3>
            <p className="text-slate-400 text-base leading-relaxed italic flex-grow">"{p.prompt}"</p>
            {copiedId === i && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 right-8 flex items-center gap-2 text-xs font-black text-yellow-400"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                הועתק!
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const extensions = [
  {
    id: 'importer',
    name: 'גשר המידע למחברת',
    originalName: 'NotebookLM Web Importer',
    description: 'הופך כל דף אינטרנט או מאמר לחלק מהמחקר שלכם ברגע, בלי העתקות מיותרות.',
    longDescription: 'תוסף עוצמתי המאפשר להוסיף מקורות מידע ל-NotebookLM ישירות מהדפדפן. בין אם מדובר במאמר ארוך, פוסט בבלוג או רשימת קישורים - הכל נכנס למחברת בלחיצה אחת.',
    url: 'https://chromewebstore.google.com/detail/notebooklm-web-importer/ijdefdijdmghafocfmmdojfghnpelnfn',
    icon: 'N',
    iconBg: 'bg-slate-900',
    stats: { users: '+100,000', rating: '4.8' },
    install: "1. היכנסו לדף התוסף בחנות.\n2. לחצו על 'הוספה לכרום'.\n3. אשרו את ההתקנה והצמידו את האייקון לסרגל הכלים.",
    usage: 'בזמן שאתם קוראים מאמר מעניין, פשוט לחצו על האייקון, בחרו את המחברת המתאימה, והתוכן יישאב פנימה באופן אוטומטי.',
    problems: 'חוסך את הצורך המתיש בהעתקה והדבקה ידנית של טקסטים וקישורים, ומאפשר בניית בסיס ידע מהירה.',
    target: 'סטודנטים, חוקרים וכל מי שרוצה לרכז מידע מהרשת למקום אחד מסודר.'
  },
  {
    id: 'youtube',
    name: 'גשר הווידאו למחברת',
    originalName: 'YouTube to NotebookLM',
    description: 'חיבור ישיר בין עולם הווידאו של יוטיוב למחברות החכמות שלכם.',
    longDescription: 'התוסף הזה הופך את יוטיוב למקור מידע נגיש. הוא מאפשר לשלוח סרטונים בודדים, פלייליסטים שלמים או ערוצים ישירות ל-NotebookLM לצורך סיכום וניתוח.',
    url: 'https://chromewebstore.google.com/detail/youtube-to-notebooklm/kobncfkmjelbefaoohoblamnbackjggk',
    icon: 'YT',
    iconBg: 'bg-red-600',
    stats: { users: '+100,000', rating: '4.9' },
    install: "1. פתחו את דף התוסף.\n2. לחצו על 'Add to Chrome'.\n3. כעת יופיע כפתור ייעודי מתחת לסרטוני יוטיוב.",
    usage: 'צופים בהרצאה? לחצו על כפתור התוסף שנוסף ליוטיוב, והסרטון יהפוך לטקסט נגיש במחברת שלכם תוך שניות.',
    problems: 'מאפשר ללמוד מסרטונים בצורה אקטיבית - לשאול שאלות על הנאמר ולקבל סיכומים מדויקים בלי לצפות שוב ושוב.',
    target: 'מי שלומד מקורסים מקוונים, הדרכות או הרצאות בווידאו ורוצה להפיק מהם תובנות כתובות.'
  },
  {
    id: 'bookshelf',
    name: 'סדר וארגון במחברות',
    originalName: 'Bookshelf: Folder Manager',
    description: 'ניהול חכם של המחברות שלכם באמצעות תיקיות וסדר ויזואלי.',
    longDescription: 'מוסיף יכולת ניהול תיקיות (Bookshelves) ל-NotebookLM. מאפשר לארגן עשרות מחברות לפי פרויקטים, נושאים או תחומי עניין בצורה אינטואיטיבית.',
    url: 'https://chromewebstore.google.com/detail/bookshelf-folder-manager/ibjbgddbhlcookmdhehgljaneccjidik',
    icon: 'C',
    iconBg: 'bg-indigo-700',
    stats: { users: '+10,000', rating: '4.7' },
    install: "1. התקינו את התוסף מהחנות.\n2. רעננו את דף ה-NotebookLM שלכם.\n3. תגלו סרגל צד חדש לניהול תיקיות.",
    usage: 'צרו תיקיות כמו "עבודה", "לימודים" או "פרויקט אישי" וגררו אליהן את המחברות המתאימות.',
    problems: 'מונע את הבלגן שנוצר כשיש עשרות מחברות בדף הבית ומקל על מציאת המידע הרלוונטי במהירות.',
    target: 'משתמשים כבדים ב-NotebookLM שמנהלים מספר רב של פרויקטים במקביל.'
  },
  {
    id: 'tools',
    name: 'All In One Notebook',
    originalName: 'NotebookLM Tools',
    description: 'תוסף All In One שמוסיף ל-NotebookLM המון יכולות שחסרות לך היום.',
    longDescription: 'מוסיף ל-NotebookLM "כלי עבודה" חסרים: תיקיות למקורות בתוך מחברת, גרירה ושחרור, ייבוא מרוכז של עשרות לינקים/טאבים, ניקוי כפילויות, תגיות, פרומפטים שמורים, Dark Mode ועוד.',
    url: 'https://chromewebstore.google.com/detail/notebooklm-tools/hiibkpjljigehlnnecbgehkhfibmahjn',
    icon: 'T',
    iconBg: 'bg-amber-400',
    stats: { users: '+10,000', rating: '4.9' },
    install: "1. פתחו את הקישור לחנות הכרום.\n2. לחצו על 'Add to Chrome'.\n3. אשרו את ההרשאות. התוסף חינמי לחלוטין ואין צורך בהרשמה.",
    usage: 'פותחים את הפאנל של NotebookLM Tools בתוך המחברת, יוצרים תיקיות פנימיות (למשל \"וידאו\", \"מסמכים\"), גוררים אליהן מקורות ושומרים פרומפטים קבועים לשימוש חוזר.',
    problems: 'פותר את הכאוס בניהול מקורות במחברות גדולות, מאפשר ניקוי כפילויות ושמירת פרומפטים שחוזרים על עצמם.',
    target: 'משתמשים כבדים (Power-Users), חוקרים, סטודנטים מתקדמים וכל מי שמנהל כמות גדולה של מידע ומחברות.'
  }
];

const tips = [
  {
    title: 'למה צריך את שני התוספים הראשונים?',
    content: 'ה-Web Importer מצטיין בייבוא מהיר של מאמרים ודפי אינטרנט שלמים, בעוד שתוסף ה-YouTube מותאם ספציפית לווידאו ומאפשר ייבוא פלייליסטים וערוצים שלמים בלחיצה אחת. השילוב ביניהם מבטיח ששום מקור מידע לא יישאר בחוץ.',
    icon: <ArrowLeftRight className="w-5 h-5" />
  },
  {
    title: 'שאילתות ממוקדות',
    content: 'במקום לבקש "סכם לי", נסו לשאול שאלות ספציפיות כמו "מה הקשר בין נושא א\' לנושא ב\' לפי המקורות שהעליתי?".',
    icon: <MessageSquare className="w-5 h-5" />
  },
  {
    title: 'שימוש מושכל בתוספים',
    content: 'התוספים הם הקיצור שלכם להצלחה. השתמשו בהם כדי להפוך שיטוט מקרי ברשת למחקר מעמיק תוך שניות.',
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: 'הערות אישיות (Notes)',
    content: 'אל תשכחו שאפשר להוסיף הערות משלכם. זה עוזר למודל להבין את ההקשר האישי שלכם בתוך המחקר.',
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    title: 'התאמה אישית בסטודיו',
    content: 'לפני שאתם לוחצים על יצירת פודקאסט או מדריך, השתמשו באייקון העיפרון (עריכה). זה מאפשר לכם לתת הנחיות ספציפיות למודל, כמו "התמקד בקהל יעד של סטודנטים" או "שמור על טון הומוריסטי", ולקבל תוצר מדויק הרבה יותר.',
    icon: <Pencil className="w-5 h-5" />
  },
  {
    title: 'חיבור לג׳ימני (Gemini)',
    content: 'חיבור המחברת לג׳ימני מאפשר לכם להשתמש ביכולות המתקדמות של המודל על בסיס המידע שלכם. יתרון אדיר הוא היכולת ליצור אתר אינטרנט שלם מהמחברת: פשוט פותחים שיחה חדשה בג\'ימיני, בוחרים מצב מעמיק ו Deep research ו canvas, מעלים את המחברת ומדביקים פרומט מנצח למטרה זו',
    icon: <Globe className="w-5 h-5" />
  }
];

const didYouKnow = [
  {
    title: 'דיוק מבוסס מקורות',
    content: 'בכל תשובה שהמודל נותן, הוא מפנה אתכם למקור המדויק עליו הוא התבסס. כך אתם יכולים להיות בטוחים שהוא לא "ממציא" מידע (הזיות) אלא נצמד לעובדות שהעליתם.',
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: 'הגרסה החינמית חזקה במיוחד',
    content: 'מי שיש לו מנוי לג׳ימני מקבל גם את נוטבוק LM, אבל הגרסה החינמית בהחלט מספיקה וכוללת: כ-100 מחברות, עד 50 מקורות בכל מחברת, כ-50 הודעות צ׳ט ביום, כ-3 Audio Overviews ביום וגישה מוגבלת ל-Deep Research.',
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: 'שיתוף ככלי למידה',
    content: 'ניתן לשתף מחברת עם אחרים. השיתוף יוצר מעין "בוט" אישי עבור המשתמש שקיבל את הגישה, שיענה לו על כל שאלה בהתבסס על המקורות שלכם. זהו כלי מושלם ליצירת מדריכי למידה אינטראקטיביים.',
    icon: <Users className="w-5 h-5" />
  }
];

function App() {
  const [expandedId, setExpandedId] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-fuchsia-500/30 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.05, 0.2, 0.05],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
            className={`absolute rounded-full blur-[120px] ${
              i % 3 === 0 ? 'bg-fuchsia-500/10 w-96 h-96' : 
              i % 3 === 1 ? 'bg-purple-500/10 w-80 h-80' : 
              'bg-yellow-500/5 w-72 h-72'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <header className="pt-24 pb-20 text-center px-4 relative overflow-hidden z-10">
        {/* Subtle background glow for header */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-fuchsia-500/5 blur-[140px] -z-10" />
        <Logo />
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: 1, 
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-12 mt-16 serif-title text-white drop-shadow-[0_0_30px_rgba(192,38,211,0.4)]"
        >
          קצת יותר ל NotebookLM
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="organic-card p-10 md:p-14 text-right group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-fuchsia-500 via-purple-500 to-yellow-500 group-hover:from-fuchsia-400 group-hover:via-purple-400 group-hover:to-yellow-400 transition-all duration-500" />
            <h2 className="text-2xl font-bold text-fuchsia-300 mb-6 flex items-center gap-3">
              <Info className="w-7 h-7" />
              מה זה בכלל NotebookLM?
            </h2>
            <p className="text-slate-300 text-xl md:text-2xl leading-relaxed font-medium">
              NotebookLM הוא עוזר מחקר מבוסס בינה מלאכותית מבית גוגל. בניגוד לצ'אטבוטים רגילים, הוא <span className="text-fuchsia-400 font-bold">מתמקד אך ורק במקורות המידע שאתם מעלים אליו</span> (מסמכים, קישורים, סרטוני יוטיוב), מה שמאפשר לו לתת תשובות מדויקות, מבוססות עובדות וללא "הזיות" של ה-AI. זהו הכלי המושלם ללמידה עמוקה, ניתוח נתונים ויצירת תובנות מורכבות.
            </p>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
        >
          הכלים והשיטות שיהפכו את המחקר שלכם למסע מרתק, מסודר ויעיל פי כמה.
        </motion.p>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-32 space-y-24 relative z-10">
        {/* How to Start Diagram Section */}
        <section className="pt-8">
          <div className="text-center mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500/10 blur-[150px] -z-10" />
            <h2 className="text-4xl md:text-5xl font-black serif-title mb-6 text-white tracking-tight">איך מתחילים? המסלול המהיר</h2>
            <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">ארבעה צעדים פשוטים בדרך למחקר חכם ומדויק</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {[
                { icon: <Lightbulb className="w-8 h-8" />, title: 'יוצרים מחברת', desc: 'פתחו מחברת חדשה ב-NotebookLM ותנו לה שם לפרויקט.' },
                { icon: <Upload className="w-8 h-8" />, title: 'מעלים מקורות', desc: 'השתמשו בתוספים כדי לייבא מאמרים, סרטונים ומסמכים.' },
                { icon: <MessageSquare className="w-8 h-8" />, title: 'חוקרים ושואלים', desc: 'שאלו את המודל שאלות על המידע שהעליתם וקבלו תשובות מדויקות.' },
                { icon: <Zap className="w-8 h-8" />, title: 'מפיקים תובנות', desc: 'בחלון הסטודיו תוכלו ליצור פודקאסט, אינפורגרפיקה, דוחות, בוחן, מצגת, מפת חשיבה ועוד.' }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileTap={{ scale: 0.98 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="organic-card p-8 flex flex-col items-center text-center group"
                >
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-3xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 group-hover:text-fuchsia-300 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                      {step.icon}
                    </div>
                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-purple-600 text-white text-lg font-black flex items-center justify-center border-4 border-[#050505] shadow-xl">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-fuchsia-300 transition-colors">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Extensions Section */}
        <section className="space-y-12">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-black serif-title text-white whitespace-nowrap">תוספים שימושיים</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-fuchsia-500/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-10">
            {extensions.map((ext, index) => (
              <motion.div
                key={ext.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.99 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="organic-card overflow-hidden group"
              >
                <div className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                  {/* Icon Section */}
                  <div className={`w-20 h-20 shrink-0 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300 ${ext.iconBg}`}>
                    {ext.id === 'youtube' ? (
                      <div className="w-14 h-10 bg-red-600 rounded-xl flex items-center justify-center overflow-hidden border border-red-500/30">
                        <svg viewBox="0 0 24 24" className="w-10 h-10 text-white fill-none stroke-current stroke-[2.5]">
                          <path d="M5 17c0-3.866 3.134-7 7-7s7 3.134 7 7" strokeLinecap="round" />
                          <path d="M8 17c0-2.209 1.791-4 4-4s4 1.791 4 4" strokeLinecap="round" />
                          <path d="M11 17c0-.552.448-1 1-1s1 .448 1 1" strokeLinecap="round" />
                        </svg>
                      </div>
                    ) : ext.id === 'bookshelf' ? (
                      <Chrome className="w-10 h-10 text-white" />
                    ) : ext.id === 'tools' ? (
                      <div className="w-14 h-14 bg-[#facc15] rounded-2xl flex items-center justify-center relative overflow-hidden border-2 border-amber-300/50">
                        {/* Book pages edge */}
                        <div className="absolute right-1.5 top-2 bottom-2 w-2.5 bg-[#fef9c3] rounded-sm" />
                        {/* Curved Arrow */}
                        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#ea580c] fill-none stroke-current stroke-[3.5] stroke-round">
                          <path d="M6 16c0-4 3-6 7-6h5m0 0l-3-3m3 3l-3 3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    ) : (
                      <span className="text-white text-4xl font-black">N</span>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 min-w-0">
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-black text-fuchsia-300 mb-1">
                        {ext.name}
                      </h3>
                      <p className="text-fuchsia-400 font-bold text-lg md:text-xl">
                        {ext.originalName}
                      </p>
                    </div>
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 font-medium">
                      {ext.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                      <div className="flex items-center gap-2 bg-slate-800 text-fuchsia-300 px-3 py-1.5 rounded-xl font-bold border border-slate-700">
                        <Users className="w-4 h-4" />
                        <span>{ext.stats.users} משתמשים</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-800 text-yellow-500 px-3 py-1.5 rounded-xl font-bold border border-slate-700">
                        <Star className="w-4 h-4 fill-yellow-500" />
                        <span>{ext.stats.rating}</span>
                      </div>
                      
                      <div className="flex-1" />
                      
                      <div className="flex items-center gap-4 w-full md:w-auto mt-6 md:mt-0">
                        <motion.button 
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setExpandedId(expandedId === ext.id ? null : ext.id)}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl border-2 border-slate-700 hover:border-fuchsia-500/50 hover:bg-slate-800 text-slate-300 transition-all text-sm font-bold"
                        >
                          <Info className="w-5 h-5" />
                          {expandedId === ext.id ? 'פחות מידע' : 'איך זה עובד?'}
                        </motion.button>
                        <motion.a 
                          whileTap={{ scale: 0.95 }}
                          href={ext.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-8 py-2.5 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-black transition-all text-sm font-bold shadow-lg shadow-yellow-900/20"
                        >
                          <span>התקנה מהירה</span>
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedId === ext.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-white/5 bg-slate-900/40 backdrop-blur-md"
                    >
                      <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-8">
                          <section>
                            <h4 className="font-black text-fuchsia-300 text-lg mb-3 flex items-center gap-3">
                              <CheckCircle2 className="w-6 h-6 text-fuchsia-400" />
                              מהות הכלי
                            </h4>
                            <p className="text-slate-300 text-base leading-relaxed font-medium">
                              {ext.longDescription}
                            </p>
                          </section>
                          <section>
                            <h4 className="font-black text-fuchsia-300 text-lg mb-3 flex items-center gap-3">
                              <Zap className="w-6 h-6 text-fuchsia-400" />
                              איך משתמשים?
                            </h4>
                            <p className="text-slate-300 text-base leading-relaxed font-medium">
                              {ext.usage}
                            </p>
                          </section>
                        </div>
                        <div className="space-y-8">
                          <section>
                            <h4 className="font-black text-fuchsia-300 text-lg mb-3 flex items-center gap-3">
                              <HelpCircle className="w-6 h-6 text-fuchsia-400" />
                              הערך המוסף
                            </h4>
                            <p className="text-slate-300 text-base leading-relaxed font-medium">
                              {ext.problems}
                            </p>
                          </section>
                          <section>
                            <h4 className="font-black text-fuchsia-300 text-lg mb-3 flex items-center gap-3">
                              <Target className="w-6 h-6 text-fuchsia-400" />
                              קהל יעד
                            </h4>
                            <p className="text-slate-300 text-base leading-relaxed font-medium">
                              {ext.target}
                            </p>
                          </section>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        <PromptLibrary />
      </main>

      <footer className="py-20 text-center border-t border-white/5 bg-slate-950/50">
        <div className="max-w-xs mx-auto mb-8">
           <div className="h-1 bg-fuchsia-500 rounded-full w-12 mx-auto" />
        </div>
        <p className="text-fuchsia-300/50 text-sm font-bold tracking-widest uppercase">
          המדריך האישי שלכם ל-NotebookLM &copy; {new Date().getFullYear()}
        </p>
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 left-8 z-50 p-4 rounded-2xl bg-indigo-600 text-white shadow-2xl shadow-indigo-500/20 hover:bg-indigo-500 transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);