import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AboutHitatek from "../screens/AboutHitatek";

const resources ={
    tr:{
        translation: {
            welcome: 'Hosgelin!',
            companyName: 'Hitatek Yazılım Ve Bilişim Sistemleri',
            Main: 'Anasayfa',
            AboutHita: 'Hakkımızda',
            Contact: 'İletişim',
            Phone: 'Telefon: +90 850 255 1620',
            NewsTitle1: 'Hitatek işe alım yapıyor',
            NewsTitle2: 'Zelensky: Ukrayna düşmanlığı Rusyaya kaydırırsa müttefikler Ukraynayı desteklemeyecek',
            NewsTitle3: 'SpaceX kapsülü 4 ülkeden 4 astronotu taşıyan uzay istasyonuna kenetlendi',
            NewsTitle4: 'Bir zamanlar yangından kurtulan nadir bir Harry Potter kitabı, yaklaşan müzayedede binlerce kişiye satılabilir',
            NewsDetail1: 'Hitatek Yazılım ve Bilişim Sistemleri Şirketi React Native alanında yeni bir çalışan işe almayı planlıyor.',
            NewsDetail2: 'Ukrayna lideri böyle bir hareketin ‘büyük risk’ olacağını ve toprakları geri alma mücadelesine koalisyon tarafından destek verildiğini söyledi',
            NewsDetail3: 'SpaceX Crew Dragon kapsülündeki astronotlar, Pazar günü Uluslararası Uzay İstasyonu’na kenetlendi ve Florida’dan fırlatıldıktan sonra yörüngedeki laboratuvarla buluşmak için bir günlük geziyi tamamladılar.',
            NewsDetail4: 'Bu yılın başında neredeyse alevler içinde kalan nadir bir "Harry Potter" kitabının şimdiye kadar basılan 15 yarışma ödüllü basımından biri, yakında müzayedeye çıkacak. Birleşik Krallık merkezli Hansons Auctioneersa göre, 2012 yılında, o zamanlar 15 yaşında olan İskoçyalı Carina Haouchine, kitapların 15. yıldönümünü kutlamak için yayınlanan "Harry Potter ve Felsefe Taşı"nın kazanan bir kopyasını elde etti.',
            AboutHitatek: '    Savunma sanayisi tecrübesine sahip bir şirket olarak, stabil sistemler tasarlayıp üretmekteyiz. En son yazılımsal ve donanımsal gelişmeleri kullanarak, iş ortaklarımızın ihtiyaçlarını en iyi şekilde karşılamak ilk önceliğimizdir.',
            AboutHitatek2:'    Savunma sanayi sektöründe sahip olduğumuz tecrübeler ile en son teknolojik gelişmeleri kullanarak çözümler sunmaktayız. Savunma sanayi sektöründe çalışan iş ortaklarımızın istek ve ihtiyaçlarını iyi bilmekteyiz ve tasarımlarımızı bunları göz önünde bulundurarak yapmaktayız.'
        }
    },
    en: {
        translation: {
            welcome: 'Welcome!',
            companyName: 'Hitatek Software and Information Systems Company',
            Main: 'Home',
            AboutHita: 'About Hitatek',
            Contact: 'Contact Us',
            Phone: 'Phone: +90 850 255 1620',
            NewsTitle1: 'Hitatek is recruiting',
            NewsTitle2: 'Zelensky: Allies will not support Ukraine if it moves hostilities to Russia',
            NewsTitle3: 'SpaceX capsule docks at space station carrying 4 astronauts from 4 countries',
            NewsTitle4: 'A rare Harry Potter book that once survived a fire could fetch thousands at upcoming auction',
            NewsDetail1: 'Hitatek Software and Information Systems Company plans to hire a new employee in the field of React Native.',
            NewsDetail2: 'Ukraine’s leader said such a move would be a ‘big risk’ and the fight to reclaim territory has been aided by the coalition',
            NewsDetail3: 'Astronauts aboard a SpaceX Crew Dragon capsule docked Sunday at the International Space Station, concluding a one-day trip to rendezvous with the orbiting laboratory after launching from Florida.',
            NewsDetail4: 'One of only 15 competition prize editions ever published of a rare “Harry Potter” book, which nearly went up in flames earlier this year, will soon go up for auction. In 2012, a then-15-year-old Carina Haouchine, from Scotland, scored a winning copy of “Harry Potter and the Philosopher’s Stone” published to mark the books’ 15th anniversary, according to United Kingdom-based Hansons Auctioneers.',
            AboutHitatek: '    As a company with defense industry experience, we design and manufacture stable systems. By using the latest software and hardware developments, it is our first priority to meet the needs of our business partners in the best way.',
            AboutHitatek2:'    We offer solutions using the latest technological developments with our experience in the defense industry sector. We are well aware of the wishes and needs of our business partners working in the defense industry sector and we make our designs by considering them.'
        }
    },
    ar: {
        translation: {
            welcome: 'مرحبًا!',
            companyName: 'شركة Hitatek للبرمجيات وأنظمة المعلومات',
            Main: 'الصفحة الرئيسية',
            AboutHita: 'معلومات عنا',
            Contact: 'تواصل',
            Phone: 'رقم الهاتف: +90 850 255 1620',
            NewsTitle1: 'Hitatek تقوم بالتجنيد',
            NewsTitle2: 'زيلينسكي: الحلفاء لن يدعموا أوكرانيا إذا نقلت أعمالها العدائية إلى روسيا',
            NewsTitle3: 'كبسولة SpaceX ترسو في المحطة الفضائية وعلى متنها 4 رواد فضاء من 4 دول',
            NewsTitle4: 'من الممكن أن يتم بيع كتاب نادر لهاري بوتر، والذي نجا من حريق ذات يوم، للآلاف في مزاد قادم',
            NewsDetail1: 'تخطط شركة Hitatek للبرمجيات وأنظمة المعلومات لتعيين موظف جديد في مجال React Native.',
            NewsDetail2: 'وقال الرئيس الأوكراني إن مثل هذه الخطوة ستكون بمثابة "مخاطرة كبيرة" وأن المعركة من أجل استعادة الأراضي ساعدت في التحالف',
            NewsDetail3: 'رست رواد الفضاء على متن كبسولة SpaceX Crew Dragon يوم الأحد في محطة الفضاء الدولية، منهين رحلة استغرقت يومًا واحدًا للقاء المختبر المداري بعد الإطلاق من فلوريدا.',
            NewsDetail4: 'واحدة من بين 15 نسخة فقط من جوائز المنافسة التي تم نشرها على الإطلاق لكتاب نادر عن "هاري بوتر"، والتي كادت أن تشتعل فيها النيران في وقت سابق من هذا العام، ستُطرح للبيع بالمزاد قريبًا. في عام 2012، حصلت كارينا هوشين، البالغة من العمر 15 عامًا، من اسكتلندا، على نسخة فائزة من كتاب “هاري بوتر وحجر الفيلسوف” الذي تم نشره بمناسبة الذكرى السنوية الخامسة عشرة للكتب، وفقًا لشركة هانسونز للمزادات ومقرها المملكة المتحدة',
            AboutHitatek: 'باعتبارنا شركة ذات خبرة في مجال الصناعات الدفاعية، نقوم بتصميم وتصنيع أنظمة مستقرة. باستخدام أحدث تطورات البرامج والأجهزة، فإن أولويتنا الأولى هي تلبية احتياجات شركائنا التجاريين بأفضل طريقة.',
            AboutHitatek2: 'نحن نقدم حلولاً باستخدام أحدث التطورات التكنولوجية من خلال خبرتنا في قطاع الصناعات الدفاعية. نحن ندرك جيدًا رغبات واحتياجات شركائنا التجاريين العاملين في قطاع الصناعات الدفاعية، ونصمم تصميماتنا من خلال أخذها بعين الاعتبار.'
        }
    }
}

i18n
    .use(initReactI18next)
    .init({
        lng: 'tr',
        resources
    })

    export default i18n