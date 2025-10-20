 const SITE_CONTENT = {
            fa: {
                dir: 'rtl',
                lang: 'fa',
                loading: 'در حال بارگذاری...',
                nav: {
                    home: 'خانه',
                    about: 'درباره من',
                    services: 'خدمات',
                    blog: 'مقالات',
                    contact: 'تماس'
                },
                hero: {
                    firstName: 'فاطمه',
                    lastName: 'فریدونیان',
                    titles: [
                        'روانشناس بالینی',
                        'مشاور خانواده',
                        'متخصص تربیت فرزند',
                        'مشاور ازدواج'
                    ],
                    contactBtn: 'شروع گفتگو'
                },
                about: {
                    title1: 'درباره',
                    title2: 'من',
                    subtitle1: 'روانشناس',
                    subtitle2: 'و مشاور خانواده',
                    p1: 'با بیش از 15 سال تجربه در زمینه روانشناسی بالینی و مشاوره خانواده، تلاش می‌کنم تا با ارائه خدمات تخصصی و حرفه‌ای، به بهبود کیفیت زندگی افراد و خانواده‌ها کمک کنم.',
                    p2: 'تخصص اصلی من در زمینه تربیت فرزند، مشاوره والدین و برگزاری کارگاه‌های آموزشی است.',
                    info: {
                        label1: 'تحصیلات:',
                        value1: 'دکترای روانشناسی',
                        label2: 'تجربه:',
                        value2: '15+ سال',
                        label3: 'شهر:',
                        value3: 'تهران',
                        label4: 'زبان:',
                        value4: 'فارسی، انگلیسی'
                    },
                    btn: 'رزرو نوبت مشاوره'
                },
                services: {
                    title1: 'خدمات',
                    title2: 'من',
                    items: [
                        {
                            icon: 'fa-child',
                            title1: 'مشاوره',
                            title2: 'تربیت فرزند',
                            desc: 'راهنمایی والدین در تربیت صحیح فرزندان، حل مشکلات رفتاری کودکان و نوجوانان'
                        },
                        {
                            icon: 'fa-users',
                            title1: 'مشاوره',
                            title2: 'خانواده',
                            desc: 'بهبود روابط خانوادگی، حل تعارضات و ایجاد ارتباط سالم در خانواده'
                        },
                        {
                            icon: 'fa-heart',
                            title1: 'مشاوره',
                            title2: 'ازدواج',
                            desc: 'مشاوره پیش از ازدواج، بهبود روابط زناشویی و حل مشکلات زوجین'
                        },
                        {
                            icon: 'fa-user',
                            title1: 'مشاوره',
                            title2: 'فردی',
                            desc: 'کمک به رشد فردی، افزایش اعتماد به نفس و مدیریت استرس و اضطراب'
                        },
                        {
                            icon: 'fa-chalkboard-teacher',
                            title1: 'کارگاه‌های',
                            title2: 'آموزشی',
                            desc: 'برگزاری کارگاه‌های تخصصی برای والدین، معلمان و متخصصان'
                        },
                        {
                            icon: 'fa-video',
                            title1: 'مشاوره',
                            title2: 'آنلاین',
                            desc: 'ارائه خدمات مشاوره به صورت آنلاین و تلفنی برای راحتی شما'
                        }
                    ]
                },
                blog: {
                    title1: 'آخرین',
                    title2: 'مقالات',
                    items: [
                        {
                            icon: 'fa-brain',
                            color: 'navy',
                            title1: 'تربیت',
                            title2: 'کودک خلاق',
                            desc: 'راهکارهای علمی و کاربردی برای پرورش خلاقیت در کودکان و نوجوانان',
                            btn: 'ادامه مطلب'
                        },
                        {
                            icon: 'fa-heart',
                            color: 'gold',
                            title1: 'مدیریت',
                            title2: 'استرس',
                            desc: 'تکنیک‌های موثر برای کاهش و مدیریت استرس در زندگی روزمره',
                            btn: 'ادامه مطلب'
                        },
                        {
                            icon: 'fa-users',
                            color: 'sky',
                            title1: 'ارتباط',
                            title2: 'موثر',
                            desc: 'اصول ارتباط سالم و موثر در خانواده و محیط کار',
                            btn: 'ادامه مطلب'
                        }
                    ]
                },
                contact: {
                    title1: 'تماس',
                    title2: 'با من',
                    infoTitle: 'اطلاعات تماس',
                    mapTitle: 'موقعیت مکانی',
                    items: [
                        { icon: 'fa-instagram', platform: 'instagram', title: 'اینستاگرام', value: '@psychology_expert' },
                        { icon: 'fa-comment-dots', platform: 'rubika', title: 'روبیکا', value: '@psychology_expert' },
                        { icon: 'fa-whatsapp', platform: 'whatsapp', title: 'واتساپ', value: '0912 345 6789' },
                        { icon: 'fa-telegram', platform: 'telegram', title: 'تلگرام', value: '@psychology_expert' },
                        { icon: 'fa-envelope', platform: 'email', title: 'ایمیل', value: 'info@example.com' },
                        { icon: 'fa-map-marker-alt', platform: 'location', title: 'آدرس', value: 'تهران، خیابان ولیعصر، پلاک 123' }
                    ]
                }
            },
            en: {
                dir: 'ltr',
                lang: 'en',
                loading: 'Loading...',
                nav: {
                    home: 'Home',
                    about: 'About',
                    services: 'Services',
                    blog: 'Blog',
                    contact: 'Contact'
                },
                hero: {
                    firstName: 'Fatemeh',
                    lastName: 'Faridounian',
                    titles: [
                        'Clinical Psychologist',
                        'Family Counselor',
                        'Parenting Specialist',
                        'Marriage Counselor'
                    ],
                    contactBtn: 'Start Chat'
                },
                about: {
                    title1: 'About',
                    title2: 'Me',
                    subtitle1: 'Psychologist',
                    subtitle2: 'and Family Counselor',
                    p1: 'With over 15 years of experience in clinical psychology and family counseling, I strive to improve the quality of life for individuals and families through professional and specialized services.',
                    p2: 'My main expertise is in parenting, parent counseling, and conducting educational workshops.',
                    info: {
                        label1: 'Education:',
                        value1: 'PhD in Psychology',
                        label2: 'Experience:',
                        value2: '15+ Years',
                        label3: 'City:',
                        value3: 'Tehran',
                        label4: 'Languages:',
                        value4: 'Farsi, English'
                    },
                    btn: 'Book Consultation'
                },
                services: {
                    title1: 'My',
                    title2: 'Services',
                    items: [
                        { icon: 'fa-child', title1: 'Parenting', title2: 'Counseling', desc: 'Guiding parents in proper child-rearing' },
                        { icon: 'fa-users', title1: 'Family', title2: 'Counseling', desc: 'Improving family relationships' },
                        { icon: 'fa-heart', title1: 'Marriage', title2: 'Counseling', desc: 'Pre-marital counseling' },
                        { icon: 'fa-user', title1: 'Individual', title2: 'Counseling', desc: 'Personal growth' },
                        { icon: 'fa-chalkboard-teacher', title1: 'Educational', title2: 'Workshops', desc: 'Specialized workshops' },
                        { icon: 'fa-video', title1: 'Online', title2: 'Counseling', desc: 'Online services' }
                    ]
                },
                blog: {
                    title1: 'Latest',
                    title2: 'Articles',
                    items: [
                        { icon: 'fa-brain', color: 'navy', title1: 'Raising', title2: 'Creative Children', desc: 'Scientific solutions', btn: 'Read More' },
                        { icon: 'fa-heart', color: 'gold', title1: 'Stress', title2: 'Management', desc: 'Effective techniques', btn: 'Read More' },
                        { icon: 'fa-users', color: 'sky', title1: 'Effective', title2: 'Communication', desc: 'Healthy principles', btn: 'Read More' }
                    ]
                },
                contact: {
                    title1: 'Contact',
                    title2: 'Me',
                    infoTitle: 'Contact Information',
                    mapTitle: 'Location',
                    items: [
                        { icon: 'fa-instagram', platform: 'instagram', title: 'Instagram', value: '@psychology_expert' },
                        { icon: 'fa-comment-dots', platform: 'rubika', title: 'Rubika', value: '@psychology_expert' },
                        { icon: 'fa-whatsapp', platform: 'whatsapp', title: 'WhatsApp', value: '0912 345 6789' },
                        { icon: 'fa-telegram', platform: 'telegram', title: 'Telegram', value: '@psychology_expert' },
                        { icon: 'fa-envelope', platform: 'email', title: 'Email', value: 'info@example.com' },
                        { icon: 'fa-map-marker-alt', platform: 'location', title: 'Address', value: 'Tehran, Valiasr St.' }
                    ]
                }
            },
            ar: {
                dir: 'rtl',
                lang: 'ar',
                loading: 'جاري التحميل...',
                nav: {
                    home: 'الرئيسية',
                    about: 'عني',
                    services: 'الخدمات',
                    blog: 'المقالات',
                    contact: 'اتصل'
                },
                hero: {
                    firstName: 'فاطمة',
                    lastName: 'فريدونيان',
                    titles: [
                        'طبيبة نفسية سريرية',
                        'مستشارة أسرية',
                        'متخصصة في تربية الأطفال',
                        'مستشارة زواج'
                    ],
                    contactBtn: 'ابدأ الدردشة'
                },
                about: {
                    title1: 'عني',
                    title2: '',
                    subtitle1: 'طبيبة نفسية',
                    subtitle2: 'ومستشارة أسرية',
                    p1: 'مع أكثر من 15 عامًا من الخبرة.',
                    p2: 'خبرتي الرئيسية في تربية الأطفال.',
                    info: {
                        label1: 'التعليم:',
                        value1: 'دكتوراه',
                        label2: 'الخبرة:',
                        value2: '15+ سنة',
                        label3: 'المدينة:',
                        value3: 'طهران',
                        label4: 'اللغات:',
                        value4: 'الفارسية، الإنجليزية'
                    },
                    btn: 'حجز استشارة'
                },
                services: {
                    title1: 'خدماتي',
                    title2: '',
                    items: [
                        { icon: 'fa-child', title1: 'استشارة', title2: 'تربية الأطفال', desc: 'إرشاد الآباء' },
                        { icon: 'fa-users', title1: 'استشارة', title2: 'أسرية', desc: 'تحسين العلاقات' },
                        { icon: 'fa-heart', title1: 'استشارة', title2: 'الزواج', desc: 'الإرشاد قبل الزواج' },
                        { icon: 'fa-user', title1: 'استشارة', title2: 'فردية', desc: 'النمو الشخصي' },
                        { icon: 'fa-chalkboard-teacher', title1: 'ورش', title2: 'تعليمية', desc: 'ورش متخصصة' },
                        { icon: 'fa-video', title1: 'استشارة', title2: 'عبر الإنترنت', desc: 'خدمات عبر الإنترنت' }
                    ]
                },
                blog: {
                    title1: 'أحدث',
                    title2: 'المقالات',
                    items: [
                        { icon: 'fa-brain', color: 'navy', title1: 'تربية', title2: 'طفل مبدع', desc: 'حلول علمية', btn: 'اقرأ المزيد' },
                        { icon: 'fa-heart', color: 'gold', title1: 'إدارة', title2: 'التوتر', desc: 'تقنيات فعالة', btn: 'اقرأ المزيد' },
                        { icon: 'fa-users', color: 'sky', title1: 'التواصل', title2: 'الفعال', desc: 'مبادئ صحية', btn: 'اقرأ المزيد' }
                    ]
                },
                contact: {
                    title1: 'اتصل',
                    title2: 'بي',
                    infoTitle: 'معلومات الاتصال',
                    mapTitle: 'الموقع',
                    items: [
                        { icon: 'fa-instagram', platform: 'instagram', title: 'إنستغرام', value: '@psychology_expert' },
                        { icon: 'fa-comment-dots', platform: 'rubika', title: 'روبيكا', value: '@psychology_expert' },
                        { icon: 'fa-whatsapp', platform: 'whatsapp', title: 'واتساب', value: '0912 345 6789' },
                        { icon: 'fa-telegram', platform: 'telegram', title: 'تيليجرام', value: '@psychology_expert' },
                        { icon: 'fa-envelope', platform: 'email', title: 'البريد', value: 'info@example.com' },
                        { icon: 'fa-map-marker-alt', platform: 'location', title: 'العنوان', value: 'طهران' }
                    ]
                }
            }
        };