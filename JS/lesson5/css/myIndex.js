let body = document.createElement('body');
document.lastChild.appendChild(body);

//------------------------------ Main-------------------------------

let main = document.createElement('main');
main.className = "profile";
body.appendChild(main);

let section = document.createElement('section');
section.className = "section main-section section_black";
main.appendChild(section);

let article = document.createElement('article');
article.className = 'main-article main-article_white';
section.appendChild(article);

let h1 = document.createElement('h1');
h1.className = 'main-article__title';
h1.innerHTML = "Andreeva Anastasiia";
article.appendChild(h1);

let ul = document.createElement('ul');
ul.className = 'main-article__list';
article.appendChild(ul);

let li = document.createElement('li');
li.innerHTML = 'I am 29 and am working at IT company';
ul.appendChild(li);

let img = document.createElement('img');
img.className = 'section__img';
img.src = "assets/picture.jpg";
section.appendChild(img);

// -----------------------------------------About-section
let aboutSection = document.createElement('section');
aboutSection.className = "section about-section";
main.appendChild(aboutSection);

let aboutArticle = document.createElement('article');
aboutArticle.className = 'article-about';
aboutSection.appendChild(aboutArticle);

let h1About = document.createElement('h1');
h1About.className = 'article-about__title article-about__title_grey';
h1About.innerHTML = "About me";
aboutArticle.appendChild(h1About);

let p = document.createElement('p');
p.className = 'article-about__item';
p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nobis facilis fuga, illo at. Natus eos, eligendi illum rerum omnis porro ex, magni, explicabo veniamincidunt in quam sapiente ut ipsum.';
aboutArticle.appendChild(p);

let aboutImg = document.createElement('img');
aboutImg.className = 'about-section__img';
aboutImg.src = "assets/aboutme.jpg";
aboutSection.appendChild(aboutImg);
// -----------------------------------------------------



