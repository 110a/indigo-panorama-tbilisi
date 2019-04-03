const textImages = [
    {appearTime:0, title:"2015 წელი <br> 8 სექტემბერი", subtitle: "წ<br>ე<br>რ<br>ი<br>ლ<br>ი<br>: ", text:"თბილისი მდინარის ხეობის გასწვრივ გაშენებული, მთებს შორის მოქცეული გამორჩეული სილამაზის ქალაქია. ამ ჰარმონიას სწორედ მისი ბუნებრივი გარემო ქმნის. თბილისის ქედები 1975 წლიდანაა დაცული, რადგან ისინი ქალაქის ხასიათისა და მისი კულტურული მნიშვნელობის განუყოფელი ნაწილია."},
    {appearTime:20, title:"14 საერთაშორისო <br> ორგანიზაციის", subtitle:"თ<br>ხ<br>ო<br>ვ<br>ნ<br>ა<br>: ", text:"14 საერთაშორისო ორგანიზაცია საქართველოს მთავრობას სთხოვდა არ დაეშვათ თბილისის ისტორიული ლანდშაფტის გულში „პანორამა თბილისის“ აშენება. ", img:"fade-out"},
    {appearTime:33, title:"თბილისი", subtitle:"", text:"თბილისი მდინარის ხეობის გასწვრივ გაშენებული, მთებს შორის მოქცეული ქალაქია."},
    {appearTime:42, title:"ჰარმონია", subtitle:"", text:"ჰარმონიას თბილისის ბუნებრივი გარემო ქმნის. "},
    {appearTime:50, title:"თბილისის ქედები", subtitle:"", text:"თბილისის ქედები მისი ხასიათის განუყოფელი ნაწილია."},
    {appearTime:60, title:"1985 წელი<br>სამი ზონა იცავს", subtitle:"", text:"1985 წლიდან, ქალაქის ამ ისტორიულ ნაწილს სამი ზონა იცავს."},
    {appearTime:84, title:"ისტორიული განაშენიანების<br> დაცვის ზონა", subtitle:"", text:"ისტორიული განაშენიანების დაცვის ზონაში დღესაც დაუშვებელია მშენებლობა."},
    {appearTime:95, title:"1985 წელი", subtitle:"კ<br>ა<br>ნ<br>ო<br>ნ<br>ი<br>: ", text:"1985 წლიდან კანონი იცავს თბილისის ბუნებრივს რელიეფს."},
    {appearTime:122, title:"1985 წელი", subtitle:"დ<br>ა<br>დ<br>გ<br>ე<br>ნ<br>ი<br>ლ<br>ე<br>ბ<br>ა<br>:", text:"1985 წლის დადგენილებას დღემდე არ დაუკარგავს ძალა."},
    {appearTime:135, title:"სოლოლაკის ქედი", subtitle:"ნ<br>ე<br>ბ<br>ა<br>რ<br>თ<br>ვ<br>ა<br>:", text:"სოლოლაკის ქედზე, ბიძინა ივანიშვილის საცხოვრებელი სახლისა და ბიზნეს კომპლექსის მშენებლობა ნებართვის გარეშე დაიწყო."},
    {appearTime:158, title:"მშენებლობის გასამართლებლად", subtitle:"ე<br>ქ<br>ს<br>კ<br>ლ<br>უ<br>ზ<br>ი<br>უ<br>რ<br>ა<br>დ<br>:", text:"დაწყებული მშენებლობის გასამართლებლად, იმ დროინდელმა კულტურის მინისტრმა, გიორგი გაბაშვილმა ექსკლუზიური ნებართვა გასცა."},
    {appearTime:170, title:"სამშენებლო ბუმი", subtitle:"", text:"და ისტორიულ ლანდშაფტის ზონაში სამშენებლო ბუმი დაიწყო."},
    {appearTime:185, title:"ახალი გენ-გეგმა", subtitle:"გ<br>ა<br>ქ<br>რ<br>ა<br>:", text:"ახალ გენ-გეგმაზე გაქრა ჯერ ერთი ზონა."},
    {appearTime:200, title:"2014 წელი", subtitle:"პ<br>ა<br>ნ<br>ო<br>რ<br>ა<br>მ<br>ა<br>:", text:"თბილისის ისტორიულ ნაწილში, მეორე პროექტი გამოჩნდა: პანორამა თბილისი."},
    {appearTime:220, title:"ექსკლუზიურად", subtitle:"ა<br>ხ<br>ა<br>ლ<br>ი<br>გ<br>ე<br>გ<br>მ<br>ა<br>:", text:"ექსკლუზიურად „პანორამა თბილისისთვის“ ახალი გენ-გეგმა მომზადდა, სადაც მშენებლობისთვის  არეალში ყველა დამცავი ზონა გამქრალი იყო. "},
    {appearTime:240, title:"თბილისი", subtitle:"", text:"თბილისის უნიკალური რელიეფი შეუქცევადად შეიცვალა."},
    {appearTime:260, title:"ახალი გენ-გეგმა", subtitle:"", text:"ახალ გენ-გეგმაში ისტორიული ლანდშაფტის დაცვის ზონა ისევ ბრუნდება."},
    {appearTime:270, title:"გერგეთის ქუჩა <br> N 1", subtitle:"პ<br>ი<br>რ<br>ო<br>ბ<br>ა<br>:", text:"თბილისის მერი პირობას დებს რომ შეჩერდება სასტუმროს მშენებლობა გერგეთის ქუჩა N 1-შიც. "},
    {appearTime:290, title:"„პანორამა თბილისი“", subtitle:"უ<br>ხ<br>ე<br>შ<br>ა<br>დ<br>:", text:"„პანორამა თბილისი“ უხეშად იჭრება თბილისის ისტორიულ ლანდშაფტში. "},
    {appearTime:299, title:"მაგრამ", subtitle:"მ<br>ა<br>გ<br>რ<br>ა<br>მ<br>:", text:"ის მაინც აშენდება.", end:"slide-up"}
];

let title = document.querySelector('h1.headings');
let subtitle = document.querySelector("h2.headings");
let text = document.querySelector(".inner-text");
let img = document.querySelector(".bg-black");
let end = document.querySelector(".the-end");
let current = 0;
let qbefore = document.querySelector('.q-sign.before');
let qafter = document.querySelector('.q-sign.after');
let animation = document.querySelector('.panorama');



let textImageHandler = () =>{
    if (current>=textImages.length - 1){
        current=textImages.length - 1;
    }
    if (audio.currentTime >= parseInt(textImages[current].appearTime) ){
        title.innerHTML = textImages[current].title;
        subtitle.innerHTML = textImages[current].subtitle;
        text.innerHTML = textImages[current].text;
        if(textImages[current].img){
            img.className += " " + textImages[current].img;
            animation.classList.add('animation');

        }
        if(audio.currentTime > 293) {
            end.className += " slide-up";
            console.log(231321);
        }
        current++;
    }
    if(current > 1){

        qbefore.style.visibility="hidden";
        qafter.style.visibility="hidden";
        text.style.fontFamily = "\"GL Satitulo\", sans-serif";
        text.style.fontSize = "26px";
    }
};

audio.addEventListener('timeupdate', textImageHandler);
