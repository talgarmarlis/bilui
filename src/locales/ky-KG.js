import localeData from 'react-intl/locale-data/ky'

const messages = {
  'topBar.saved': 'Сакталды',
  'topBar.syncing': 'Шайкештештируу',
  'topBar.publish': 'Чыгаруу',
  'topBar.blogs': 'Блогдор',
  'topBar.forum': 'Форум',
  'topBar.courses': 'Сабактар',
  'topBar.login': 'Кируу',
  'topBar.register': 'Катталуу',
  'topBar.back': 'Артка баруу',
  'topBar.about': 'Биз жонундо',
  'topBar.support': 'Колдоо',
  'topBar.typeToSearch': 'Издоо',
  'topBar.profileMenu.hello': 'Салам',
  'topBar.profileMenu.profile': 'Профиль',
  'topBar.profileMenu.newStory': 'Жаны ангеме',
  'topBar.profileMenu.drafts': 'Черновик',
  'topBar.profileMenu.readingList': 'Окуу тизмеси',
  'topBar.profileMenu.logout': 'Чыгуу',

  'footer.termsOfUse': 'Колдонуу эрежелери',
  'footer.support': 'Колдоо',
  'footer.contacts': 'Контакттар',
  'footer.allRightsReserved': 'Бардык укуктар корголгон',

  'user.login': 'Кируу',
  'user.login.header': 'Сураныч, кириниз',
  'user.login.email': 'Электрондук дарек',
  'user.login.emailMessage': 'Сураныч, электрондук дарегинизди жазыныз',
  'user.login.password': 'Сыр соз',
  'user.login.passwordMessage': 'Сураныч,сыр созунузду жазыныз',
  'user.login.remember': 'Мени жаттап кал',
  'user.login.forgotPassword': 'Сыр созум кандай эле?',
  'user.login.register': 'Катталуу',
  'user.login.registerMessage': 'эгер катталуум жок болсо',

  'user.register': 'Катталуу',
  'user.register.header': 'Катталуу',
  'user.register.subtitle': 'Жана ойлорунузга убакыт боло баштаныз',
  'user.register.name': 'Фамилия',
  'user.register.nameMessage': 'Сураныч атынызды жазыныз',
  'user.register.surname': 'Фамилия',
  'user.register.surnameMessage': 'Сураныч фамилиянызды жазыныз',
  'user.register.email': 'Электрондук дарек',
  'user.register.emailMessage': 'Сураныч, электрондук дарегинизди жазыныз',
  'user.register.password': 'Сыр соз',
  'user.register.passwordMessage': 'Сураныч,сыр созунузду жазыныз',
  'user.register.confirm': 'Сыр созунузду кайталаныз',
  'user.register.confirmMessage': 'Сыр созунуздун ырастоосун бериниз',
  'user.register.passwordConfirmMessage': 'Сиздин сыр соз жана ырастоонуз топ келген жок',
  'user.register.agreement': 'Баардык эрежелерди карманууга макулмун',
  'user.register.agreementMessage': 'Сураныч, макулдугунузду ырастаныз',
  'user.register.login': 'Кируу',
  'user.register.loginMessage': 'эгер колдонуучунун ысымы бар болсо',
  'user.register.hi': 'Салам',
  'user.register.thanks': 'Катталуунуз учун рахмат',
  'user.register.confirmationEmail': 'Ырастоо каты электрондук дарегинизге  жонотулду',
  'user.register.instructions': 'Катталууну ырастоо учун томондогу инструкцияга баш ийиниз',
  'user.register.resend': 'Кайталап жибер',
  'user.register.resendMessage': 'confirmation if you did not receive email from us',
  'user.register.continue': 'Улантуу учун кириниз',

  'user.confirm': 'Ырастоо электрондук каты',
  'user.confirm.hi': 'Салам',
  'user.confirm.thanks': 'Катталуунуз учун рахмат',
  'user.confirm.email': 'Сиздин электрондук дарегиниз',
  'user.confirm.verified': 'аныкталды',
  'user.confirm.notVerified': 'Электрондук дарегиниз аныкталган жок',
  'user.confirm.notVerifiedMessage': 'Катаны табыш учун томондогу билдирууну окунуз',
  'user.confirm.continue': 'Улантуу учун кириниз',

  'user.password.forgot': 'Сыр созум кандай эле?',
  'user.password.forgot.restore': 'Сыр созумду калыбына келтируу',
  'user.password.forgot.email': 'Сиздин электрондук дарегиниз',
  'user.password.forgot.emailMessage': 'Сураныч, электрондук дарегинизди жазыныз',
  'user.password.forgot.back': 'Кируу бетине кайт',
  'user.password.forgot.instructions': 'Инструкция электрондук дарегинизге жонотулду',
  'user.password.forgot.instructionsMessage': 'Сыр созунузду жаныртуу учун интрукция ,электрондук дарегинизге жонотулду',
  'user.password.forgot.continue': 'Улантуу учун колдонуучунун ысымын жазыныз',

  'user.password.reset': 'Сыр созумду жанырт',
  'user.password.reset.updated': 'Сыр созунуз жаныртылды',
  'user.password.reset.updatedMessage': 'Сиздин сыр созунуз ийгиликтуу жаныртылды',
  'user.password.reset.invalidLink': 'Сиздин сыр созду жаныртуу шилтемениз  жараксыз',
  'user.password.reset.invalidLinkMessage': 'Катаны табыш учун томонку билдирууну окунуз',
  'user.password.reset.hi': 'Салам',
  'user.password.reset.resetPassword': 'Сураныч, сыр созунузду жаныртыныз',
  'user.password.reset.newPassword': 'Жаны сыр соз',
  'user.password.reset.newPasswordMessage': 'Жаны сыр созунузду жазыныз',
  'user.password.reset.confirmPassword': 'Сыр созунузду аныктаныз',
  'user.password.reset.confirmPasswordMessage': 'Сураныч сыр созунузду аныктаныз',
  'user.password.reset.confirmationError': 'Сиздин сыр созунуз жана аныктоонуз топ келген жок',
  'user.password.reset.back': 'Кируу бетине кайт',
  'user.password.reset.continue': 'Улантуу учун колдонуучунун ысымын жазыныз',

  'home': 'Башкы бет',
  'home.feed.latestPosts': 'Сонку макалалар',
  'home.feed.post.readMore': 'Улантуу',

  'author.profile': 'Автордун профили',
  'author.profile.info.edit': 'Редакциялоо',
  'author.profile.info.bio': 'Сиз жонундо маалымат',
  'author.profile.info.mind': '',
  'author.profile.info.fileFormatError': 'Томондогу форматтагы файлдарды гана жуктой аласыз JPG/PNG',
  'author.profile.info.fileSizeError': 'Суроттун колому 2MBтан аз болушу шарт',
  'author.profile.info.updateInfo': 'Маалыматынызды жаныртыныз',
  'author.profile.info.name': 'Ысымыныз',
  'author.profile.info.nameMessage': 'Атынызды жазыныз',
  'author.profile.info.surname': 'Фамилияныз',
  'author.profile.info.surnameMessage': 'Фамилиянызды жазыныз',
  'author.profile.info.mindMessage': 'Ойунуз кандай',
  'author.profile.info.bioMessage': 'Озунуз  жонундо маалымат',
  'author.profile.info.update': 'Озгортуу',
  'author.profile.feed.latestPosts': 'Сонку макалалар',
  'author.profile.feed.post.readMore': 'Улантуу',

  'author.drafts': 'Черновик',
  'author.drafts.stories': 'Сиздин макалалар',
  'author.drafts.write': 'Макала  жазуу',
  'author.drafts.published': 'Жарыяланган',
  'author.drafts.actions': 'Аракеттер',
  'author.drafts.edit': 'Редакциялоо',
  'author.drafts.delete': 'Очуруу',

  'author.readingList': 'Окуу тизмеси',
  'author.readingList.bookmarks': 'Кыстармалар',
  'author.readingList.clapped': 'Жактырылгандар',

  'article.editor.title': 'Макаланын аталышы',
  'article.editor.placeholder': 'Макаланы жазыныз',
  'article.editor.form.header': 'Макаланы жарыяла',
  'article.editor.form.preview': 'Макаланын корунушу',
  'article.editor.form.imagePick': 'Алдын ала корсотулгон суротту танданыз же тартып келиниз',
  'article.editor.form.imagePickMessage': 'Кобуроок окурмандарды чогултуу учун жогорку сапаттагы суроттон кошунуз',
  'article.editor.form.title': 'Макаланын аталышы',
  'article.editor.form.titleMessage': 'Макаланын аталышын жазыныз',
  'article.editor.form.subtitle': 'Соз башы',
  'article.editor.form.subtitleMessage': 'Соз башын жазыныз',
  'article.editor.form.note': 'Эскертуу',
  'article.editor.form.noteMessage': 'Озгортуулор сиздин ангемениздин Билерман баракчачынын башкы бетиндеги корунушун озгортот , бирок бул жердеги корунушун эмес',
  'article.editor.form.tag': 'Тэг кошуу',
  'article.editor.form.tagDescription': 'Окурмандар сиздин макаланызды кененирээк тушунуу учун тэг кошунуз же алмаштырыныз( 5 тэгке чеин)',
  'article.editor.form.tagMessage': '5 тэгке чейин',
  'article.editor.form.language': 'Макаланын тили',
  'article.editor.form.publish': 'Макаланы жарыяла',

}

export default {
  locale: 'ky-KG',
  antdData: null,
  localeData,
  messages,
}
