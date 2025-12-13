const questions = [
  {
    "question": "Сеть информационных ресурсов – это:",
    "variants": [
      "HTML (HyperTextMarkupLanguage)",
      "IE (Internet Explorer)",
      "URI (Universal Resource Indentifier)",
      "WWW (World Wide Web)",
      "Web-сервер"
    ],
    "correct_answer": "WWW (World Wide Web)"
  },
  {
    "question": "Универсальный идентификатор ресурсов, предназначенный для кодирования адреса ресурса в Web – это:",
    "variants": [
      "URI (Universal Resource Indentifier)",
      "IE (Internet Explorer)",
      "HTML (HyperTextMarkupLanguage)",
      "WWW (World Wide Web)",
      "Web-сервер"
    ],
    "correct_answer": "URI (Universal Resource Indentifier)"
  },
  {
    "question": "HTML (HyperTextMarkupLanguage) – это:",
    "variants": [
      "Универсальный идентификатор ресурсов",
      "Web-сервер",
      "Сеть информационных ресурсов",
      "Расширенный текст",
      "Язык разметки гипертекста"
    ],
    "correct_answer": "Язык разметки гипертекста"
  },
  {
    "question": "Разметка – это:",
    "variants": [
      "Расширенный текст, который включает дополнительные элементы такие,  как иллюстрации, ссылки, таблички",
      "Использование специальных кодов, легко отделяемых от смыслового содержания документа и используемых для реализации гипертекста",
      "Дополнительные ключевые слова, отделяемые от ключевого слова тега, и от других атрибутов пробелами и размещаемые до завершающего тег символа угловой скобки",
      "Средство отображения документа",
      "Универсальный идентификатор ресурсов"
    ],
    "correct_answer": "Использование специальных кодов, легко отделяемых от смыслового содержания документа и используемых для реализации гипертекста"
  },
  {
    "question": "Атрибуты – это:",
    "variants": [
      "Дополнительные ключевые слова, отделяемые от ключевого слова тега, и от других атрибутов пробелами и размещаемые до завершающего тег символа угловой скобки",
      "Использование специальных кодов, легко отделяемых от смыслового содержания документа и используемых для реализации гипертекста",
      "Расширенный текст, который включает дополнительные элементы такие,  как иллюстрации, ссылки, таблички",
      "Средство отображения документа",
      "Универсальный идентификатор ресурсов"
    ],
    "correct_answer": "Дополнительные ключевые слова, отделяемые от ключевого слова тега, и от других атрибутов пробелами и размещаемые до завершающего тег символа угловой скобки"
  },
  {
    "question": "Управляющие конструкции языка HTML называются:",
    "variants": [
      "Атрибутами",
      "Разметками",
      "Тегами",
      "Браузер",
      "Ссылками"
    ],
    "correct_answer": "Тегами"
  },
  {
    "question": "Элементы языка HTML – это:",
    "variants": [
      "Сеть информационных ресурсов",
      "Часть документа между открывающим и закрывающим тегом",
      "Расширенный текст",
      "Язык разметки гипертекста",
      "Универсальный идентификатор ресурсов"
    ],
    "correct_answer": "Часть документа между открывающим и закрывающим тегом"
  },
  {
    "question": "Сколько бывает уровней заголовка",
    "variants": [
      "6",
      "4",
      "1",
      "9",
      "12"
    ],
    "correct_answer": "6"
  },
  {
    "question": "Абзацы задаются тегом:",
    "variants": [
      ".<H1>…</H1>",
      ".<BR>…</BR>",
      ".<P>… </P>",
      ".<UL>…</UL>",
      ".<LI>…</LI>"
    ],
    "correct_answer": ".<P>… </P>"
  },
  {
    "question": "Заголовки задаются тегом:",
    "variants": [
      ".<P>… </P>",
      ".<UL>…</UL>",
      ".<H1>…</H1>",
      ".<BR>",
      ".<LI>…</LI>"
    ],
    "correct_answer": ".<H1>…</H1>"
  },
  {
    "question": "Переход на новую строку задается непарным тегом",
    "variants": [
      ".<H1>…</H1>",
      ".<LI>…</LI>",
      ".<UL>…</UL>",
      ".<HR>",
      ".<BR>"
    ],
    "correct_answer": ".<BR>"
  },
  {
    "question": "Горизонтальная линейка задается непарным тегом",
    "variants": [
      ".<HR>",
      ".<H1>…</H1>",
      ".<LI>…</LI>",
      ".<UL>…</UL>",
      ".<BR>"
    ],
    "correct_answer": ".<HR>"
  },
  {
    "question": "Укажите пример тега, предназначенный для создания горизонтальной линейки шириной 10 пикселов, занимающий половину ширины окна и расположенную справа:",
    "variants": [
      ".<HR ALIGN=”RIGHT” HEIGHT =”10”WIDTH=”50%”>",
      ".<HR ALIGN=”RIGHT”SIZE=”60%”WIDTH=”10”>",
      ".<HR ALIGN=”LEFT”SIZE=”50%”WIDTH=”10”>",
      ".<HR ALIGN=” LEFT ”SIZE=”10”HEIGHT=”50%”>",
      ".<HR ALIGN=”RIGHT” SIZE=”10” WIDTH=”50%”>"
    ],
    "correct_answer": ".<HR ALIGN=”RIGHT” SIZE=”10” WIDTH=”50%”>"
  },
  {
    "question": "Гипертекстовые ссылки определяются:",
    "variants": [
      "Парным тегом <P>, с обязательным атрибутом HREF=",
      "Парным тегом <A>, с обязательным атрибутом HREF=",
      "Парным тегом <A>, с обязательным атрибутом SIZE=",
      "Непарным тегом <A>, с обязательным атрибутом HREF=",
      "Парным тегом <A>, с обязательным атрибутом ALIGN="
    ],
    "correct_answer": "Парным тегом <A>, с обязательным атрибутом HREF="
  },
  {
    "question": "Для интегрирования объектов с мультимедиа в Web-страницу, используют:",
    "variants": [
      "Парный тег <OBJECT>",
      "Парным тегом <ADDRESS>",
      "Парным тегом <TABLE>",
      "Парным тегом <A>",
      "Непарным тегом <H>"
    ],
    "correct_answer": "Парный тег <OBJECT>"
  },
  {
    "question": "Для внутренних гиперссылок используется:",
    "variants": [
      "Парный тег <A>, который использует обязательный атрибут NAME=",
      "Парный тег <A>, который использует обязательный атрибут ALIGN=",
      "Парный тег <A>, который использует обязательный атрибут BORDER=",
      "Парный тег <A>, который использует обязательный атрибут COLSPAN=",
      "Парный тег <A>, который использует обязательный атрибут HREF="
    ],
    "correct_answer": "Парный тег <A>, который использует обязательный атрибут NAME="
  },
  {
    "question": "Форма записи ненумерованных списков:",
    "variants": [
      ".<UL><LI>список пунктов</UL>",
      ".<OL><LI>список пунктов</OL>",
      ".<DT> термин</DD>",
      ".<DL><LI>список пунктов</DL>",
      ".<LI>список пунктов</OL>"
    ],
    "correct_answer": ".<UL><LI>список пунктов</UL>"
  },
  {
    "question": "Форма записи нумерованных списков:",
    "variants": [
      ".<OL><LI>список пунктов</OL>",
      ".<LI>список пунктов</OL>",
      ".<DL><LI>список пунктов</DL>",
      ".<UL><LI>список пунктов</UL>",
      ".<DT> термин</DD>"
    ],
    "correct_answer": ".<OL><LI>список пунктов</OL>"
  },
  {
    "question": "Таблица задается парным тегом",
    "variants": [
      "Парным тегом <TABLE>",
      "Парным тегом <A>",
      "Непарным тегом <H>",
      "Парным тегом <ADDRESS>",
      "Парный тег <OBJECT>"
    ],
    "correct_answer": "Парным тегом <TABLE>"
  },
  {
    "question": "Строка таблицы задается тегом",
    "variants": [
      ".<TR></TR>",
      ".<A></A>",
      ".<H></H>",
      ".<TABLE></TABLE>",
      ".<OBJECT></OBJECT>"
    ],
    "correct_answer": ".<TR></TR>"
  },
  {
    "question": "Ячейки в заголовках столбцов и строк задаются:",
    "variants": [
      "Парным тегом <TD>",
      "Парный тег <OBJECT>",
      "Парным тегом <TH>",
      "Парным тегом <A>",
      "Парным тегом <ADDRESS>"
    ],
    "correct_answer": "Парным тегом <TH>"
  },
  {
    "question": "Обычные ячейки задаются:",
    "variants": [
      "Парным тегом <TH>",
      "Парным тегом <TD>",
      "Парным тегом <A>",
      "Парный тег <OBJECT>",
      "Парным тегом <ADDRESS>"
    ],
    "correct_answer": "Парным тегом <TD>"
  },
  {
    "question": "Укажите правильный пример таблицы с двумя строками и тремя столбцами:",
    "variants": [
      ".<TABLE>\n<TR><TD>\n<TR><TD>\n<TR><TD>\n</TABLE>",
      ".<TABLE>\n<TR><TD><TD><TD>\n<TR><TD><TD><TD>\n</TABLE>",
      ".<TABLE>\n<TD><TR><TR>\n<TD><TR><TR>\n<TD><TR><TR>\n</TABLE>",
      ".<TABLE>\n<TD><TR><TR><TR>\n<TD><TR><TR><TR>\n</TABLE>",
      ".<TABLE>\n<TR><TD><TD><TD>\n<TR><TD><TD><TD>\n<TR><TD><TD><TD>\n</TABLE>"
    ],
    "correct_answer": ".<TABLE>\n<TR><TD><TD><TD>\n<TR><TD><TD><TD>\n</TABLE>"
  },
  {
    "question": "Укажите перечень допустимых атрибутов применяемых для таблиц:",
    "variants": [
      "ALIGN",
      "VALIGN",
      "WIDTH",
      "HEIGHT",
      "Все ответы верны"
    ],
    "correct_answer": "Все ответы верны"
  },
  {
    "question": "Укажите какого формата рисунки может отобразить Web браузер:",
    "variants": [
      "GIF",
      "X Bitmap(XBM)",
      "Все ответы верны",
      "JPEG",
      "PNG"
    ],
    "correct_answer": "Все ответы верны"
  },
  {
    "question": "Укажите правильную схему включения рисунка:",
    "variants": [
      ".<shift+insert=”Image”>",
      ".<img src=”Image”>",
      "Все ответы верны",
      ".<print screen=”Image”>",
      ".<insert=”Image”>"
    ],
    "correct_answer": ".<img src=”Image”>"
  },
  {
    "question": "В данном примере <img src=”pr1.png” align=”bottom”> рисунок по отношению к тексту может располагаться следующим образом:",
    "variants": [
      "В тексте",
      "Внизу",
      "В таблице",
      "Посередине",
      "Вверху"
    ],
    "correct_answer": "Внизу"
  },
  {
    "question": "В данном примере <img src=”pr1.png” align=”middle”> рисунок по отношению к тексту может располагаться следующим образом:",
    "variants": [
      "В тексте",
      "Посередине",
      "Внизу",
      "Вверху",
      "В таблице"
    ],
    "correct_answer": "Посередине"
  },
  {
    "question": "В данном примере <img src=”pr1.png” align=”top”> рисунок по отношению к тексту может располагаться следующим образом:",
    "variants": [
      "В тексте",
      "Внизу",
      "Посередине",
      "В таблице",
      "Вверху"
    ],
    "correct_answer": "Вверху"
  },
  {
    "question": "В данном примере <img src=”pr1.png” Vspace=”10”> какой будет результат:",
    "variants": [
      "Расстояние между текстом и рисунком(по диагонали) равен 10 пикселям",
      "Расстояние между текстом и рисунком(по горизонтали) равен 10 пикселям",
      "Ширина самой картинки равна 10",
      "Расстояние между текстом и рисунком (по вертикали) равен 10 пикселям",
      "Высота самой картинки равна 10"
    ],
    "correct_answer": "Расстояние между текстом и рисунком (по вертикали) равен 10 пикселям"
  },
  {
    "question": "В данном примере <img src=”pr1.png” hspace=”10”> какой будет результат:",
    "variants": [
      "Расстояние между текстом и рисунком(по вертикали) равен 10 пикселям",
      "Высота самой картинки равна 10",
      "Расстояние между текстом и рисунком (по горизонтали) равен 10 пикселям",
      "Ширина самой картинки равна 10",
      "Расстояние между текстом и рисунком(по диагонали) равен 10 пикселям"
    ],
    "correct_answer": "Расстояние между текстом и рисунком (по горизонтали) равен 10 пикселям"
  },
  {
    "question": "В данном примере <img src=”pr1.png” height=”10”> какой будет результат:",
    "variants": [
      "Расстояние между текстом и рисунком(по диагонали) равен 10 пикселям",
      "Расстояние между текстом и рисунком(по горизонтали) равен 10 пикселям",
      "Расстояние между текстом и рисунком(по вертикали) равен 10 пикселям",
      "Ширина самой картинки равна 10",
      "Высота самой картинки равна 10"
    ],
    "correct_answer": "Высота самой картинки равна 10"
  },
  {
    "question": "В данном примере <img src=”pr1.png” width=”10”> какой будет результат:",
    "variants": [
      "Расстояние между текстом и рисунком(по горизонтали) равен 10 пикселям",
      "Высота самой картинки равна 10",
      "Расстояние между текстом и рисунком(по вертикали) равен 10 пикселям",
      "Ширина самой картинки равна 10",
      "Расстояние между текстом и рисунком(по диагонали) равен 10 пикселям"
    ],
    "correct_answer": "Ширина самой картинки равна 10"
  },
  {
    "question": "В данном примере <img src=”pr1.png” border=”10”> какой будет результат:",
    "variants": [
      "Высота самой картинки равна 10",
      "Рамка вокруг самой картинки равна 10 пикселям",
      "Расстояние между текстом и рисунком(по горизонтали) равен 10 пикселям",
      "Ширина самой картинки равна 10",
      "Расстояние между текстом и рисунком(по диагонали) равен 10 пикселям"
    ],
    "correct_answer": "Рамка вокруг самой картинки равна 10 пикселям"
  },
  {
    "question": "В данном примере <img src=”image.png” align=”left” hspace=30 vspace=5 alt=”моя фотография”> какой будет результат:",
    "variants": [
      "По отношению к рисунку текст расположен по левой стороне, расстояние между текстом и рисунком(по вертикали) равен 5 пикселям, по вертикали равен 30, краткое описание картинки «моя фотография»",
      "По отношению к рисунку текст расположен по левой стороне, расстояние между текстом и рисунком(по диагонали) равен 30 пикселям, по вертикали равен 5, краткое описание картинки «моя фотография»",
      "По отношению к рисунку текст расположен по правой стороне, расстояние между текстом и рисунком(по горизонтали) равен 5 пикселям, по вертикали равен 30, краткое описание картинки «моя фотография»",
      "По отношению к рисунку текст расположен по левой стороне, расстояние между текстом и рисунком(по горизонтали) равен 5 пикселям, по вертикали равен 30, краткое описание картинки «моя фотография»",
      "По отношению к рисунку текст расположен по левой стороне, расстояние между текстом и рисунком (по горизонтали) равен 30 пикселям, по вертикали равен 5, краткое описание картинки «моя фотография»"
    ],
    "correct_answer": "По отношению к рисунку текст расположен по левой стороне, расстояние между текстом и рисунком (по горизонтали) равен 30 пикселям, по вертикали равен 5, краткое описание картинки «моя фотография»"
  },
  {
    "question": "Элемент шрифта, который увеличивает размер текста на единицу:",
    "variants": [
      "<strong>…</strong>",
      "<sub>…</sub>",
      "<sup>…</sup>",
      "<small>…</small>",
      "<big>…</big>"
    ],
    "correct_answer": "<big>…</big>"
  },
  {
    "question": "Элемент шрифта, который уменьшает размер текста на единицу:",
    "variants": [
      "<sub>…</sub>",
      "<small>…</small>",
      "<sup>…</sup>",
      "<big>…</big>",
      "<strong>…</strong>"
    ],
    "correct_answer": "<small>…</small>"
  },
  {
    "question": "Элемент шрифта, применяемый как индекс:",
    "variants": [
      "<big>…</big>",
      "<sup>…</sup>",
      "<strong>…</strong>",
      "<sub>…</sub>",
      "<small>…</small>"
    ],
    "correct_answer": "<sub>…</sub>"
  },
  {
    "question": "Элемент шрифта, применяемый как степень:",
    "variants": [
      "<small>…</small>",
      "<sup>…</sup>",
      "<strong>…</strong>",
      "<sub>…</sub>",
      "<big>…</big>"
    ],
    "correct_answer": "<sup>…</sup>"
  },
  {
    "question": "Элемент шрифта, отображает жирный шрифт:",
    "variants": [
      "<sup>…</sup>",
      "<em>…</em>",
      "<i>…</i>",
      "<strong>…</strong>",
      "<u>…</u>"
    ],
    "correct_answer": "<strong>…</strong>"
  },
  {
    "question": "Элемент шрифта, отображает наклонный шрифт:",
    "variants": [
      "<strong>…</strong>",
      "<i>…</i>",
      "<sup>…</sup>",
      "<em>…</em>",
      "<u>…</u>"
    ],
    "correct_answer": "<i>…</i>"
  },
  {
    "question": "Элемент шрифта, отображает жирный шрифт:",
    "variants": [
      "<u>…</u>",
      "<strong>…</strong>",
      "<i>…</i>",
      "<em>…</em>, <b>…</b>",
      "<sup>…</sup>"
    ],
    "correct_answer": "<em>…</em>, <b>…</b>"
  },
  {
    "question": "Тег, обозначающий начало описания тела документа:",
    "variants": [
      "HTML",
      "BODY",
      "HEAD",
      "TITLE",
      "H"
    ],
    "correct_answer": "BODY"
  },
  {
    "question": "Тег заголовка документа …",
    "variants": [
      "BODY",
      "HTML",
      "HEAD",
      "TITLE",
      "P"
    ],
    "correct_answer": "TITLE"
  },
  {
    "question": "Тег нового абзаца …",
    "variants": [
      "BR",
      "DIV",
      "HR",
      "B",
      "P"
    ],
    "correct_answer": "P"
  },
  {
    "question": "Тег новой строки (переход на новую строку) …",
    "variants": [
      "B",
      "HR",
      "BR",
      "DIV",
      "P"
    ],
    "correct_answer": "BR"
  },
  {
    "question": "Тег горизонтальной линии …",
    "variants": [
      "d",
      "B",
      "HR",
      "P",
      "BR"
    ],
    "correct_answer": "HR"
  },
  {
    "question": "Тег таблицы …",
    "variants": [
      "TITLE",
      "TR",
      "TABLE",
      "CAPTION",
      "NAME"
    ],
    "correct_answer": "TABLE"
  },
  {
    "question": "Тег заголовка таблицы …",
    "variants": [
      "CAPTION",
      "TABLE",
      "TR",
      "TITLE",
      "NAME"
    ],
    "correct_answer": "CAPTION"
  },
  {
    "question": "Тег новой строки в таблице …",
    "variants": [
      "DT",
      "TR",
      "TB",
      "TH",
      "TD"
    ],
    "correct_answer": "TR"
  },
  {
    "question": "Тег новой ячейки в строке таблицы …",
    "variants": [
      "DT",
      "TD",
      "TH",
      "TB",
      "TR"
    ],
    "correct_answer": "TD"
  },
  {
    "question": "Тег нумерованного списка …",
    "variants": [
      "LI",
      "UL",
      "DL",
      "DT",
      "OL"
    ],
    "correct_answer": "OL"
  },
  {
    "question": "Тег ненумерованного списка …",
    "variants": [
      "LI",
      "DL",
      "DT",
      "UL",
      "OL"
    ],
    "correct_answer": "UL"
  },
  {
    "question": "Тег нового элемента в списке …",
    "variants": [
      "OL",
      "UL",
      "DT",
      "LI",
      "DL"
    ],
    "correct_answer": "LI"
  },
  {
    "question": "Тег списка определений",
    "variants": [
      "DT",
      "OL",
      "DL",
      "LI",
      "UL"
    ],
    "correct_answer": "DL"
  },
  {
    "question": "Тег вставки изображения …",
    "variants": [
      "IMG RCS=’PICTURE.GIF’",
      "A MARK=’PICTURE.GIF’",
      "IMG=’PICTURE.GIF’",
      "A HREF=’PICTURE.GIF’",
      "IMG SRC=’PICTURE.GIF’"
    ],
    "correct_answer": "IMG SRC=’PICTURE.GIF’"
  },
  {
    "question": "Тег нового раздела в документе …",
    "variants": [
      "B",
      "BR",
      "P",
      "HR",
      "DIV"
    ],
    "correct_answer": "DIV"
  },
  {
    "question": "Тег текста жирного начертания …",
    "variants": [
      "B",
      "U",
      "TT",
      "EM",
      "I"
    ],
    "correct_answer": "B"
  },
  {
    "question": "Тег текста подчеркнутого начертания …",
    "variants": [
      "EM",
      "I",
      "B",
      "TT",
      "U"
    ],
    "correct_answer": "U"
  },
  {
    "question": "Тег текста начертания курсивом…",
    "variants": [
      "TD",
      "I",
      "U",
      "B",
      "TT"
    ],
    "correct_answer": "I"
  },
  {
    "question": "Тег заголовка в документе …",
    "variants": [
      "TR",
      "H",
      "CAPTION",
      "TITLE",
      "NAME"
    ],
    "correct_answer": "H"
  },
  {
    "question": "Параметр тега ссылки, организующий переход на определенное место в документе …",
    "variants": [
      "SRC",
      "HREF",
      "NAME",
      "GOTO",
      "A"
    ],
    "correct_answer": "NAME"
  },
  {
    "question": "Параметр тега ссылки, организующий переход на другой документ …",
    "variants": [
      "GOTO",
      "A",
      "NAME",
      "HREF",
      "SRC"
    ],
    "correct_answer": "HREF"
  },
  {
    "question": "Как задается размер шрифта?",
    "variants": [
      "FONT WIDTH=’12’",
      "FONT SIZE=’+2’",
      "SMALL",
      "FONT HEIGHT=’12’",
      "BIG"
    ],
    "correct_answer": "FONT SIZE=’+2’"
  },
  {
    "question": "Тег, увеличивающий размер текста на единицу…",
    "variants": [
      "FONT SIZE=’+2’",
      "BIG",
      "FONT WIDTH=’12’",
      "FONT HEIGHT=’12’",
      "SMALL"
    ],
    "correct_answer": "BIG"
  },
  {
    "question": "Тег, уменьшающий размер текста на единицу…",
    "variants": [
      "FONT HEIGHT=’12’",
      "BIG",
      "SMALL",
      "FONT SIZE=’+2’",
      "FONT WIDTH=’12’"
    ],
    "correct_answer": "SMALL"
  },
  {
    "question": "Тег нижнего индекса текста…",
    "variants": [
      "SUP",
      "SAB",
      "SAP",
      "SP",
      "SUB"
    ],
    "correct_answer": "SUB"
  },
  {
    "question": "Тег верхнего индекса текста…",
    "variants": [
      "SAP",
      "SUB",
      "SAB",
      "SP",
      "SUP"
    ],
    "correct_answer": "SUP"
  },
  {
    "question": "Параметр тега <Body>, задающий цвет фона …",
    "variants": [
      "RED",
      "COLOR",
      "TEXT",
      "BACKGROUND",
      "BGCOLOR"
    ],
    "correct_answer": "BGCOLOR"
  },
  {
    "question": "Параметр тега <Body>, задающий фоновое изображение …",
    "variants": [
      "COLOR",
      "TEXT",
      "BACKGROUND",
      "BGCOLOR",
      "RED"
    ],
    "correct_answer": "BACKGROUND"
  },
  {
    "question": "Параметр тега <Body>, задающий цвет шрифта …",
    "variants": [
      "TEXT",
      "COLOR",
      "FONT COLOR",
      "BGCOLOR",
      "BACKGROUND"
    ],
    "correct_answer": "TEXT"
  },
  {
    "question": "Параметр тега <Body>, задающий цвет посещенной ссылки …",
    "variants": [
      "D LINK",
      "VLINK",
      "LINKCOLOR",
      "ALINK",
      "LINK"
    ],
    "correct_answer": "VLINK"
  },
  {
    "question": "Параметр тега <Body>, задающий цвет ссылки …",
    "variants": [
      "D LINK",
      "V LINK",
      "LINKCOLOR",
      "ALINK",
      "LINK"
    ],
    "correct_answer": "LINK"
  },
  {
    "question": "Параметр, задающий выравнивание объекта относительно документа, таблицы и т.д….",
    "variants": [
      "RIGHT",
      "WIDTH",
      "CENTER",
      "HEIGHT",
      "ALIGN"
    ],
    "correct_answer": "ALIGN"
  },
  {
    "question": "Значение параметра TYPE ненумерованного списка, задающий маркер закрашенного круга …",
    "variants": [
      "RECTANGLE",
      "ELLIPSE",
      "DISC",
      "SQUARE",
      "CIRCLE"
    ],
    "correct_answer": "DISC"
  },
  {
    "question": "Значение параметра TYPE ненумерованного списка, задающий маркер круга…",
    "variants": [
      "DISC",
      "CIRCLE",
      "ELLIPSE",
      "SQUARE",
      "RECTANGLE"
    ],
    "correct_answer": "CIRCLE"
  },
  {
    "question": "Значение параметра TYPE ненумерованного списка, задающий маркер квадрата…",
    "variants": [
      "DISC",
      "SQUARE",
      "ELLIPSE",
      "RECTANGLE",
      "CIRCLE"
    ],
    "correct_answer": "SQUARE"
  },
  {
    "question": "Параметр, задающий краткое описание картинки…",
    "variants": [
      "SRC",
      "CELLSPACING",
      "ALT",
      "CELLPADDING",
      "BORDER"
    ],
    "correct_answer": "ALT"
  },
  {
    "question": "Параметр, задающий рамку вокруг картинки…",
    "variants": [
      "BORDER",
      "CELLSPACING",
      "CELLPADDING",
      "SRC",
      "ALT"
    ],
    "correct_answer": "BORDER"
  },
  {
    "question": "Параметр тега таблицы, задающий ширину пространства между ячейкой и рамкой…",
    "variants": [
      "ALT",
      "CELLPADDING",
      "SRC",
      "BORDER",
      "CELLSPACING"
    ],
    "correct_answer": "CELLSPACING"
  },
  {
    "question": "Параметр тега ячейки, объединяющий ячейки по горизонтали…",
    "variants": [
      "CELLPADDING",
      "CELLSPACING",
      "COLSPAN",
      "ROWSPAN",
      "SRC"
    ],
    "correct_answer": "ROWSPAN"
  },
  {
    "question": "Параметр тега ячейки, объединяющий ячейки по горизонтали…",
    "variants": [
      "SRC",
      "CELLPADDING",
      "COLSPAN",
      "CELLSPACING",
      "ROWSPAN"
    ],
    "correct_answer": "COLSPAN"
  },
  {
    "question": "Параметр тега шрифта, задающий гарнитуру …",
    "variants": [
      "GARNITURA",
      "COLOR",
      "FACE",
      "FONTCOLOR",
      "FONTFACE"
    ],
    "correct_answer": "FACE"
  },
  {
    "question": "HTML (HyperTextMarkupLanguage) – это:",
    "variants": [
      "Универсальный идентификатор ресурсов",
      "Сеть информационных ресурсов",
      "Язык разметки гипертекста",
      "Нет правильного ответа",
      "Расширенный текст"
    ],
    "correct_answer": "Язык разметки гипертекста"
  },
  {
    "question": "Расширенный текст, который включает дополнительные элементы такие,  как иллюстрации, ссылки, таблички – это:",
    "variants": [
      "Гипертекст",
      "Разметка",
      "Атрибуты",
      "Браузер",
      "Ссылка"
    ],
    "correct_answer": "Гипертекст"
  },
  {
    "question": "Атрибуты – это:",
    "variants": [
      "Универсальный идентификатор ресурсов",
      "Использование специальных кодов, легко отделяемых от смыслового содержания документа и используемых для реализации гипертекста",
      "Средство отображения документа",
      "Дополнительные ключевые слова, отделяемые от ключевого слова тега, и от других атрибутов пробелами и размещаемые до завершающего тег символа угловой скобки",
      "Расширенный текст, который включает дополнительные элементы такие,  как иллюстрации, ссылки, таблички"
    ],
    "correct_answer": "Дополнительные ключевые слова, отделяемые от ключевого слова тега, и от других атрибутов пробелами и размещаемые до завершающего тег символа угловой скобки"
  },
  {
    "question": "Укажите пример тега, предназначенная для создания горизонтальной линейки шириной 10 пикселов, занимающий половину ширины окна и расположенную справа:",
    "variants": [
      "HR ALIGN=”RIGHT”SIZE=”10”WIDTH=”50%”",
      "HR ALIGN=” LEFT ”SIZE=”10”HEIGHT=”50%”",
      "HR ALIGN=”RIGHT” HEIGHT =”10”WIDTH=”50%”",
      "HR ALIGN=”LEFT”SIZE=”50%”WIDTH=”10”",
      "HR ALIGN=”RIGHT”SIZE=”60%”WIDTH=”10”"
    ],
    "correct_answer": "HR ALIGN=”RIGHT”SIZE=”10”WIDTH=”50%”"
  },
  {
    "question": "Гипертекстовые ссылки определяются:",
    "variants": [
      "Парным тегом <A>, с обязательным атрибутом HREF=",
      "Парным тегом <A>, с обязательным атрибутом SIZE=",
      "Парным тегом <P>, с обязательным атрибутом HREF=",
      "Непарным тегом <A>, с обязательным атрибутом HREF=",
      "Парным тегом <A>, с обязательным атрибутом ALIGN="
    ],
    "correct_answer": "Парным тегом <A>, с обязательным атрибутом HREF="
  },
  {
    "question": "Для внутренних гиперссылок используется:",
    "variants": [
      "Парный тег <A>, который использует обязательный атрибут HREF=",
      "Парный тег <A>, который использует обязательный атрибут ALIGN=",
      "Парный тег <A>, который использует обязательный атрибут COLSPAN=",
      "Парный тег <A>, который использует обязательный атрибут NAME=",
      "Парный тег <A>, который использует обязательный атрибут BORDER="
    ],
    "correct_answer": "Парный тег <A>, который использует обязательный атрибут NAME="
  },
  {
    "question": "Укажите перечень допустимых атрибутов применяемых для таблиц:",
    "variants": [
      "ALIGN",
      "HEIGHT",
      "VALIGN",
      "Все ответы верны",
      "WIDTH"
    ],
    "correct_answer": "Все ответы верны"
  },
  {
    "question": "Укажите какого формата рисунки может отобразить Web браузер:",
    "variants": [
      "Все ответы верны",
      "JPEG",
      "PNG",
      "X Bitmap(XBM)",
      "GIF"
    ],
    "correct_answer": "Все ответы верны"
  },
  {
    "question": "Укажите правильную схему включения рисунка:",
    "variants": [
      "shift+insert=”Image”",
      "insert=”Image”",
      "Все ответы верны",
      "print screen=”Image”",
      "img src=”Image”"
    ],
    "correct_answer": "img src=”Image”"
  },
  {
    "question": "Укажите тег устанавливающую кнопку:",
    "variants": [
      "БАТЫРМА disabled name=\"name\" value",
      "BUTTON>…</BUTTON",
      "BATTON",
      "Все ответы верны",
      "КНОПКА name=\"name\" value"
    ],
    "correct_answer": "BUTTON>…</BUTTON"
  },
  {
    "question": "Фоновый цвет и цвет текста для всей страницы назначаются параметрами тега BODY:",
    "variants": [
      "color=\"цвет\" text=\"цвет\">...тело страницы...",
      "body bgcolor=\"цвет\" text=\"цвет\">...тело страницы../body",
      "body color=\"цвет\" text=\"цвет\">...тело страницы../body",
      "Все ответы верны",
      "body color=\"цвет\">...тело страницы../body"
    ],
    "correct_answer": "body bgcolor=\"цвет\" text=\"цвет\">...тело страницы../body"
  },
  {
    "question": "Цвет шрифта для отдельных участков текста (тег также может управлять размерами шрифта):",
    "variants": [
      "body color=\"цвет\" text=\"цвет\">... участок текста../body",
      "body bgcolor=\"цвет\" text=\"цвет\">... участок текста../body",
      "color=\"цвет\" text=\"цвет\">.. участок текста...",
      "Все ответы верны",
      "font color=\"цвет\">...участок текста../font"
    ],
    "correct_answer": "font color=\"цвет\">...участок текста../font"
  },
  {
    "question": "Цвет фона таблицы:",
    "variants": [
      "font color=\"цвет\">.. тело таблицы(ячейки)../font",
      "table bgcolor=\"цвет\">...тело таблицы(ячейки)../table",
      "color=\"цвет\" text=\"цвет\">.. тело таблицы(ячейки)...",
      "Все ответы верны",
      "body bgcolor=\"цвет\" text=\"цвет\">... тело таблицы(ячейки)../body"
    ],
    "correct_answer": "table bgcolor=\"цвет\">...тело таблицы(ячейки)../table"
  },
  {
    "question": "Атрибут «cellpadding=число» команды TABLE означает:",
    "variants": [
      "Расстояние между ячейками таблицы",
      "Цвет линии рамки",
      "Расстояние между содержимым ячейки и рамкой",
      "Цвет фона таблицы",
      "Толщина линии рамки"
    ],
    "correct_answer": "Расстояние между содержимым ячейки и рамкой"
  },
  {
    "question": "Атрибут «background=цвет» команды TABLE означает:",
    "variants": [
      "Фоновая картинка",
      "Толщина линии рамки",
      "Цвет линии рамки",
      "Цвет фона таблицы",
      "Расстояние между ячейками таблицы"
    ],
    "correct_answer": "Фоновая картинка"
  },
  {
    "question": "Применение какого атрибута объединяет n соседних ячеек одного и того же столбца.",
    "variants": [
      "TD VALIGN=n ROWSPAN=m",
      "TD ALIGN=n COLSPAN=n",
      "TD ROWSPAN=n",
      "TD COLSPAN=n",
      "TD COLSPAN=n ROWSPAN=m"
    ],
    "correct_answer": "TD ROWSPAN=n"
  },
  {
    "question": "Какие необходимо применить атрибуты для объединения прямоугольного блока n × m ячеек.",
    "variants": [
      "TD COLSPAN=n ROWSPAN=m",
      "TD COLSPAN=n",
      "TD ROWSPAN=n",
      "TD VALIGN=n ROWSPAN=m",
      "TD ALIGN=n COLSPAN=m"
    ],
    "correct_answer": "TD COLSPAN=n ROWSPAN=m"
  },
  {
    "question": "Укажите правильный ответ данного параметра тега\n<OL TYPE=i>\n<LI> text </LI>\n</OL",
    "variants": [
      "Нумерация строчными латинскими буквами",
      "Нумерация прописными латинскими буквами",
      "Нумерация список с параметрами, подразумеваемыми по умолчанию",
      "Нумерация строчными римскими цифрами",
      "Нумерация обычными (прописными) римскими цифрами"
    ],
    "correct_answer": "Нумерация строчными римскими цифрами"
  },
  {
    "question": "Основой языка JavaScript является понятие…",
    "variants": [
      "Объекта",
      "Атрибута",
      "Свойства",
      "Метода",
      "Класса"
    ],
    "correct_answer": "Объекта"
  },
  {
    "question": "Событие, возникающее при уходе курсора c объекта?",
    "variants": [
      "onLoad",
      "onMouseOver",
      "onRelease",
      "onClick",
      "onMouseOut"
    ],
    "correct_answer": "onMouseOut"
  },
  {
    "question": "Событие, возникающее при загрузке страницы?",
    "variants": [
      "onRelease",
      "onClick",
      "onLoad",
      "onMouseOver",
      "onMouseOut"
    ],
    "correct_answer": "onLoad"
  },
  {
    "question": "Событие, возникающее при закрытии страницы?",
    "variants": [
      "onSubmit",
      "onUnload",
      "onRelease",
      "onChange",
      "onLoad"
    ],
    "correct_answer": "onUnload"
  },
  {
    "question": "Событие, возникающее при наведении курсора на объект?",
    "variants": [
      "onMouseOut",
      "onRelease",
      "onLoad",
      "onMouseOver",
      "onClick"
    ],
    "correct_answer": "onMouseOver"
  },
  {
    "question": "Событие, возникающее по щелчку на объекте?",
    "variants": [
      "onLoad",
      "onClick",
      "onReleae",
      "onMouseOver",
      "onMouseOut"
    ],
    "correct_answer": "onClick"
  },
  {
    "question": "Событие, возникающее при выделении объекта на странице?",
    "variants": [
      "onRelease",
      "onSelect",
      "onLoad",
      "onSubmit",
      "onChange"
    ],
    "correct_answer": "onSelect"
  },
  {
    "question": "Метод, отображающий диалоговое окно с сообщением и кнопкой ОК (не требует решения пользователя):",
    "variants": [
      "confirm",
      "math",
      "prompt",
      "alt",
      "alert"
    ],
    "correct_answer": "alert"
  },
  {
    "question": "Метод, который отображает диалоговое окно с сообщением и полем ввода:",
    "variants": [
      "alert",
      "math",
      "confirm",
      "prompt",
      "alt"
    ],
    "correct_answer": "prompt"
  },
  {
    "question": "С помощью методов какого объекта можно вычислить абсолютное значение, натуральный логарифм, наименьшее и наибольшее значение функции, двух аргументов, вы¬числить степень вещественного числа и т.д.?",
    "variants": [
      "alert",
      "confirm",
      "prompt",
      "Math",
      "alt"
    ],
    "correct_answer": "Math"
  },
  {
    "question": "Метод, который отображает диалоговое окно с указанным сообщением и кнопками OK и Cancel:",
    "variants": [
      "alert",
      "math",
      "prompt",
      "confirm",
      "alt"
    ],
    "correct_answer": "confirm"
  },
  {
    "question": "Метод, который возвращает день недели для указанной даты:",
    "variants": [
      "getDate",
      "getYear",
      "getDay",
      "getMonth",
      "getTime"
    ],
    "correct_answer": "getDay"
  },
  {
    "question": "Какие параметры существуют при редактировании картинки, рисунка:",
    "variants": [
      "ALT",
      "HSPACE",
      "ALIGN",
      "BORDER",
      "Все ответы верны"
    ],
    "correct_answer": "Все ответы верны"
  },
  {
    "question": "Элемент вычерчивающий горизонтальные линии имеет следующие параметры:",
    "variants": [
      "ALIGN, NOSHADE, SIZE",
      "BORDER, HEIGHT",
      "Все ответы верны",
      "VSPACE, WIDTH",
      "ALIGN, BORDER, HSPACE, ALT"
    ],
    "correct_answer": "ALIGN, NOSHADE, SIZE"
  },
  {
    "question": "Метод, который возвращает год  для указанной даты:",
    "variants": [
      "getDay",
      "getMonth",
      "getYear",
      "getDate",
      "getTime"
    ],
    "correct_answer": "getYear"
  },
  {
    "question": "Метод, который возвращает число месяца для указанной даты:",
    "variants": [
      "getYear",
      "getDate",
      "getDay",
      "getMonth",
      "getTime"
    ],
    "correct_answer": "getDate"
  },
  {
    "question": "Метод, который возвращает месяц для указанной даты:",
    "variants": [
      "getTime",
      "getDay",
      "getYear",
      "getMonth",
      "getDate"
    ],
    "correct_answer": "getMonth"
  },
  {
    "question": "Метод, который возвращает числовое значение, соответствующее времени для указанной даты:",
    "variants": [
      "getTime",
      "getHours",
      "getDay",
      "getMonth",
      "getDate"
    ],
    "correct_answer": "getHours"
  },
  {
    "question": "Команда, позволяющая вставить на форму документа объект в виде текстовой строки:",
    "variants": [
      "INPUT type=\"edit\"",
      "INPUT type=\"reset\"",
      "INPUT type=\"label\"",
      "INPUT type=\"text\"",
      "INPUT type=\"button\""
    ],
    "correct_answer": "INPUT type=\"text\""
  },
  {
    "question": "Команда, позволяющая вставить на форму документа объект в виде кнопки для сброса всех введенных значений в поля формы:",
    "variants": [
      "INPUT type=\"reset\"",
      "INPUT type=\"button\"",
      "INPUT type=\"label\"",
      "INPUT type=\"edit\"",
      "INPUT type=\"text\""
    ],
    "correct_answer": "INPUT type=\"reset\""
  },
  {
    "question": "Укажите правильное написание объявления переменной a числового типа с именем num1  в функции:",
    "variants": [
      "var a=Real (obj.numl.value)",
      "var a=Integer (obj.numl.name)",
      "var a=String (obj.numl.value)",
      "var a=Char (obj.numl.value)",
      "var a=Number (obj.num1.value)"
    ],
    "correct_answer": "var a=Number (obj.num1.value)"
  },
  {
    "question": "Укажите команду обращения к строке состояния окна браузера:",
    "variants": [
      "windows.status",
      "window.panel",
      "window.state",
      "window.status",
      "window.bar"
    ],
    "correct_answer": "window.status"
  },
  {
    "question": "Команда, изменяющая цвет фона страницы.",
    "variants": [
      "document.location",
      "documentbgcolor",
      "document.linkColor",
      "document.bgColor",
      "document.fgColor"
    ],
    "correct_answer": "document.bgColor"
  },
  {
    "question": "Гиперссылки на Web - странице могут обеспечить переход...",
    "variants": [
      "на любую web - страницу любого сервера Интернет",
      "только на web - страницы данного сервера",
      "на любой документ любого компьютера",
      "только в пределах данной web - страницы",
      "на любую web - страницу данного региона"
    ],
    "correct_answer": "на любую web - страницу любого сервера Интернет"
  },
  {
    "question": "Команда, позволяющая вставить на форму документа объект в виде кнопки:",
    "variants": [
      "INPUT type=\"reset\"",
      "INPUT type=\"label\"",
      "INPUT type=\"text\"",
      "INPUT type=\"edit\"",
      "INPUT type=\"button\""
    ],
    "correct_answer": "INPUT type=\"button\""
  },
  {
    "question": "Укажите правильное написание команды ввода на форму текстового поля высотой в 6 пикселей и именем res:",
    "variants": [
      "INPUT type=\"text\" height=6 name=\"res\"",
      "INPUT type=\"text\" size=6 name=\"res\"",
      "INPUT type=\"text\" height=60 value=\"res\"",
      "INPUT type=\"text\" height=6 value=\"res\"",
      "INPUT type=\"text\" size=6 value=\"res\""
    ],
    "correct_answer": "INPUT type=\"text\" size=6 name=\"res\""
  },
  {
    "question": "В данном примере <img src=”pr1.png” hspace=”10”> какой будет результат:",
    "variants": [
      "Расстояние между текстом и рисунком(по горизонтали) равен 10 пикселям",
      "Расстояние между текстом и рисунком(по диагонали) равен 10 пикселям",
      "Расстояние между текстом и рисунком(по вертикали) равен 10 пикселям",
      "Высота самой картинки равна 10",
      "Ширина самой картинки равна 10"
    ],
    "correct_answer": "Расстояние между текстом и рисунком(по горизонтали) равен 10 пикселям"
  },
  {
    "question": "В данном примере <img src=”pr1.png” height=”10”> какой будет результат:",
    "variants": [
      "Ширина самой картинки равна 10",
      "Расстояние между текстом и рисунком(по вертикали) равен 10 пикселям",
      "Расстояние между текстом и рисунком(по диагонали) равен 10 пикселям",
      "Расстояние между текстом и рисунком(по горизонтали) равен 10 пикселям",
      "Высота самой картинки равна 10"
    ],
    "correct_answer": "Высота самой картинки равна 10"
  },
  {
    "question": "Укажите правильное написание объявления переменной b числового типа с именем b1  в функции:",
    "variants": [
      "var b=Integer (obj.b1.name)",
      "var b=Real (obj.b1.value)",
      "var b=Number (obj.b1.value)",
      "var b=Real (obj.b.value)",
      "var b=Char (obj.b1.value)"
    ],
    "correct_answer": "var b=Number (obj.b1.value)"
  },
  {
    "question": "Ссылка на другой документ",
    "variants": [
      "parent.locate=’’",
      "a name=’’",
      "parent.href=’’",
      "parent.locacion=’’",
      "parent.location=’’"
    ],
    "correct_answer": "parent.location=’’"
  },
  {
    "question": "Тег - это:",
    "variants": [
      "Текст, заключенный в фигурные скобки",
      "Фрагмент программы, включённой в состав Web-страницы.",
      "Стартовый и конечный маркеры элемента;",
      "Текст, в котором используются спецсимволы;",
      "Указатель на другой файл или объект;"
    ],
    "correct_answer": "Стартовый и конечный маркеры элемента;"
  },
  {
    "question": "Что такое браузер (browser)?",
    "variants": [
      "программа для редактирования веб-страниц.",
      "специальный компьютер, ведущий статистику в Интернет;",
      "человек, контролирующий время, проведенное сотрудниками в Интернет;",
      "программа для просмотра веб-страниц;",
      "программа электронной почты"
    ],
    "correct_answer": "программа для просмотра веб-страниц;"
  },
  {
    "question": "Что означает данная строка var h=(new Date()).getHours()?",
    "variants": [
      "объявление переменной, которой присваивается значение текущего года",
      "объявление переменной, которой присваивается значение текущего времени",
      "объявление переменной, которой присваивается значение текущего времени;",
      "объявление переменной, которой присваивается значение текущей минуты",
      "объявление переменной, которой присваивается значение текущей даты"
    ],
    "correct_answer": "объявление переменной, которой присваивается значение текущего времени;"
  },
  {
    "question": "if (h > 23 || h < 7) document.write(\"Доброй ...!\"), в данном скрипте который позволяет вывести пожелания «Доброй ночи, вечера, утра или дня» заполните многоточие необходимым текстом",
    "variants": [
      "Добрый вечер",
      "Доброй ночи",
      "Доброй недели",
      "Доброго дня",
      "Доброго утра"
    ],
    "correct_answer": "Доброй ночи"
  },
  {
    "question": "if (h > 6 && h < 12) document.write(\"...!\"), в данном скрипте который позволяет вывести пожелания «Доброй ночи, вечера, утра или дня» заполните многоточие необходимым текстом",
    "variants": [
      "Добрый день",
      "Доброе утро",
      "Добрый вечер",
      "Доброй ночи",
      "Доброй недели"
    ],
    "correct_answer": "Доброе утро"
  },
  {
    "question": "if (h > 11 && h < 19) document.write(\"...!\"), в данном скрипте который позволяет вывести пожелания «Доброй ночи, вечера, утра или дня» заполните многоточие необходимым текстом",
    "variants": [
      "Добрый день",
      "Доброй недели",
      "Доброй ночи",
      "Добрый вечер",
      "Доброе утро"
    ],
    "correct_answer": "Добрый день"
  },
  {
    "question": "if (h > 18 && h < 24) document. write(\"...!\"), в данном скрипте который позволяет вывести пожелания «Доброй ночи, вечера, утра или дня» заполните многоточие необходимым текстом",
    "variants": [
      "Доброе утро",
      "Добрый день",
      "Добрый вечер",
      "Доброй недели",
      "Доброй ночи"
    ],
    "correct_answer": "Добрый вечер"
  },
  {
    "question": "Что означает в скрипте  A HREF=\"http://www.newmail.ru\" \nonMouseOver=\"window.status='Бесплатный хостинг'; \nreturn true\">Ссылка</A> команда return true?",
    "variants": [
      "Проверить наличие строки состояния в окне",
      "Помещает строку состояния в окно документа",
      "Сделать ссылку в строке состояния",
      "Вывод в строку состояния текста в апострофах",
      "Вывод в строку состояния адрес ссылки"
    ],
    "correct_answer": "Проверить наличие строки состояния в окне"
  },
  {
    "question": "С какого числа идет нумерация месяцев в JavaScript?",
    "variants": [
      "1",
      "01",
      "I",
      "2",
      "0"
    ],
    "correct_answer": "0"
  },
  {
    "question": "Объект Navigator имеет 4 свойства. Какое из этих свойств означает название браузера?",
    "variants": [
      "appCodeName",
      "appVersion",
      "userAgent",
      "appCaption",
      "appName"
    ],
    "correct_answer": "appName"
  },
  {
    "question": "Объект Navigator имеет 4 свойства. Какое из этих свойств означает версию браузера и платформу, на которой он работает?",
    "variants": [
      "appName",
      "appCodeName",
      "userAgent",
      "appUserAgent",
      "appVersion"
    ],
    "correct_answer": "appVersion"
  },
  {
    "question": "Объект Navigator имеет 4 свойства. Какое из этих свойств означает кодовое имя браузера?",
    "variants": [
      "appCodeName",
      "appName",
      "userAgent",
      "appVersion",
      "appUserAgent"
    ],
    "correct_answer": "appCodeName"
  },
  {
    "question": "Документ имеет свои свойства. Какое из этих свойств означает URL страницы?",
    "variants": [
      "cookie",
      "location",
      "lastModified",
      "forms",
      "referrer"
    ],
    "correct_answer": "location"
  },
  {
    "question": "Документ имеет свои свойства. Какое из этих свойств сообщает какой страницы пришел пользователь?",
    "variants": [
      "referrer",
      "location",
      "forms",
      "cookie",
      "lastModified"
    ],
    "correct_answer": "referrer"
  },
  {
    "question": "Документ имеет свои свойства. Какое из этих свойств сообщает дату последнего изменения страницы?",
    "variants": [
      "location",
      "lastModified",
      "forms",
      "referrer",
      "cookie"
    ],
    "correct_answer": "lastModified"
  },
  {
    "question": "Что означает config в скрипте window.open('opened.html', 'joe', config='height=300,width=300')self.name=\"main window\"?",
    "variants": [
      "Обращение к новому окну",
      "Указывает, что следующие команды относятся к конфигурации нового окна",
      "Имя нового окна",
      "Загрузка нового окна",
      "Закрытие нового окна"
    ],
    "correct_answer": "Указывает, что следующие команды относятся к конфигурации нового окна"
  },
  {
    "question": "Что означает config в скрипте window.open('opened.html', 'joe', config='height=300,width=300')self.name=\"main window\"?",
    "variants": [
      "Загрузка нового окна",
      "Закрытие нового окна",
      "Обращение к новому окну",
      "Указывает, что следующие команды относятся к конфигурации нового окна",
      "Имя нового окна"
    ],
    "correct_answer": "Указывает, что следующие команды относятся к конфигурации нового окна"
  },
  {
    "question": "У каждого окна документа имеются свои свойства, параметры. Укажите свойство, отвечающее за наличие панели инструментов с кнопками назад, вперед, стоп и т.д.",
    "variants": [
      "scrollbars",
      "status",
      "resizable",
      "toolbar",
      "menubar"
    ],
    "correct_answer": "toolbar"
  },
  {
    "question": "У каждого окна документа имеются свои свойства, параметры. Укажите свойство, отвечающее за наличие строки меню с командами файл, правка, вид и т.д",
    "variants": [
      "status",
      "resizable",
      "scrollbars",
      "menubar",
      "toolbar"
    ],
    "correct_answer": "menubar"
  },
  {
    "question": "У каждого окна документа имеются свои свойства, параметры. Укажите свойство, отвечающее за наличие полосы прокрутки.",
    "variants": [
      "scrollbars",
      "toolbar",
      "menubar",
      "status",
      "resizable"
    ],
    "correct_answer": "scrollbars"
  },
  {
    "question": "У каждого окна документа имеются свои свойства, параметры. Укажите свойство, отвечающее за то, сможет ли пользователь изменить размер окна по своему желанию.",
    "variants": [
      "resizable",
      "menubar",
      "status",
      "toolbar",
      "scrollbars"
    ],
    "correct_answer": "resizable"
  },
  {
    "question": "У каждого окна документа имеются свои свойства, параметры. Укажите свойство, отвечающее за наличие адресной строки.",
    "variants": [
      "location",
      "toolbar",
      "resizable",
      "menubar",
      "status"
    ],
    "correct_answer": "location"
  },
  {
    "question": "У каждого окна документа имеются свои свойства, параметры. Укажите свойство, отвечающее за наличие строки состояния.",
    "variants": [
      "resizable",
      "menubar",
      "status",
      "toolbar",
      "location"
    ],
    "correct_answer": "status"
  },
  {
    "question": "Скрипт var OpenWindow=window.open(\"\",\"newwin\", \"height=300, width=300'); выполнит …",
    "variants": [
      "Удаление нового окна с размерами 300*300 пикселей",
      "Открытие нового окна с размерами 300*300 милиметров",
      "Копирование нового окна с размерами 300*300 пикселей",
      "Открытие нового окна с размерами 300*300 пикселей",
      "Закрытие нового окна с размерами 300*300 пикселей"
    ],
    "correct_answer": "Открытие нового окна с размерами 300*300 пикселей"
  },
  {
    "question": "Скрипт if ( a == \"да\")  {s=\"Хорошо!\"}  if(b == \"нет\" {s=\"Плохо!\"}  выполнит …",
    "variants": [
      "Удаление нового окна с размерами 300*300 пикселей",
      "Копирование нового окна с размерами 300*300 пикселей",
      "Проверит и в случае положительного ответа присвоит переменной значение хорошо, в противном случае плохо",
      "Проверит и в случае отрицательного ответа присвоит переменной значение хорошо, в противном случае нет",
      "Проверит и в случае положительного ответа присвоит переменной значение плохо, в противном случае хорошо"
    ],
    "correct_answer": "Проверит и в случае положительного ответа присвоит переменной значение хорошо, в противном случае плохо"
  },
  {
    "question": "Скрипт <INPUT TYPE=\"button\" VALUE=\"Жми!\" onClick=\"askuser()\"> выполнит …",
    "variants": [
      "Вставит на форму кнопку с именем Жми, и при щелчке на ней выполнит функцию askuser",
      "Вставит на форму имя Жми, и при щелчке на ней выполнит функцию askuser",
      "Вставит на форму кнопку сброса с именем Жми, и при щелчке на ней выполнит функцию askuser",
      "Вставит на форму кнопку с именем Жми, и при щелчке на ней выполнит функцию akuser",
      "Вставит на форму текстовое поле с именем Жми, и при щелчке на ней выполнит функцию asuser"
    ],
    "correct_answer": "Вставит на форму кнопку с именем Жми, и при щелчке на ней выполнит функцию askuser"
  },
  {
    "question": "В JavaScript бывают циклы двух видов…",
    "variants": [
      "For, until",
      "For, while",
      "Loop, until",
      "While, until",
      "Loop for"
    ],
    "correct_answer": "For, while"
  },
  {
    "question": "Какие циклы используются, когда пользователь точно знает количество повторений…",
    "variants": [
      "Loop",
      "until",
      "While",
      "For",
      "Loop for"
    ],
    "correct_answer": "For"
  },
  {
    "question": "Какие циклы используются, когда пользователь точно не знает количество повторений…",
    "variants": [
      "Loop",
      "While",
      "For",
      "until",
      "Loop for"
    ],
    "correct_answer": "While"
  },
  {
    "question": "Применение какого атрибута объединяет n соседних ячеек в одной и той же строке.",
    "variants": [
      "TD ALIGN=n",
      "TD ROWSPAN=n",
      "TD COLSPAN=n",
      "TD COLSPAN=n ROWSPAN=m",
      "TD VALIGN=n"
    ],
    "correct_answer": "TD COLSPAN=n"
  },
  {
    "question": "Применение какого атрибута объединяет 5 соседних ячеек в одной и той же строке.",
    "variants": [
      "TD COLSPAN=5 ROWSPAN=5",
      "TD COLSPAN=5",
      "TD ROWSPAN=5",
      "TD ALIGN=5",
      "TD VALIGN=5"
    ],
    "correct_answer": "TD COLSPAN=5"
  }
];