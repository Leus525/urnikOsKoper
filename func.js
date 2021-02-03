
$(document).ready(function() {
    let mon = [['slo - 8 : 20' , 'https://ucilnice.arnes.si/course/view.php?id=26225&section=4'], ['mat - 9 : 10' , 'https://ucilnice.arnes.si/course/view.php?id=57393'], ['fiz - 10 : 25' , 'https://ucilnice.arnes.si/course/view.php?id=3487'], ['spo - 11 : 15' , 'https://ucilnice.arnes.si/course/view.php?id=60783'], ['zgo - 12 : 05' , 'https://ucilnice.arnes.si/course/view.php?id=24353']];
    let tue = [['bio - 8 : 20' , 'https://ucilnice.arnes.si/course/view.php?id=23766'], ['itd - 9 : 10' , 'https://ucilnice.arnes.si/course/view.php?id=27887'], ['ang - 10 : 25' , 'https://ucilnice.arnes.si/course/view.php?id=21466'], ['kem - 11 : 15' , 'https://ucilnice.arnes.si/course/view.php?id=23777'], ['geo - 12 : 05' , 'https://ucilnice.arnes.si/course/view.php?id=25872'], ['slo/ru - 12 : 55' , 'https://ucilnice.arnes.si/course/view.php?id=26225&section=4']];
    let wen = [['fiz - 8 : 20' , 'https://ucilnice.arnes.si/course/view.php?id=3487'], ['slo - 9 : 10' , 'https://ucilnice.arnes.si/course/view.php?id=26225&section=4'], ['zgo - 10 : 25' , 'https://ucilnice.arnes.si/course/view.php?id=24353'], ['mat - 11 : 15' , 'https://ucilnice.arnes.si/course/view.php?id=57393'], ['lum - 12 : 05' , 'https://ucilnice.arnes.si/course/view.php?id=24696'], ['spo - 12 : 55' , 'https://ucilnice.arnes.si/course/view.php?id=60783'], ['rom - 13 : 45' , 'https://ucilnice.arnes.si/course/view.php?id=31271']];
    let thu = [['kem - 8 : 20' , 'https://ucilnice.arnes.si/course/view.php?id=23777'], ['mat - 9 : 10' , 'https://ucilnice.arnes.si/course/view.php?id=57393'], ['ang - 10 : 25' , 'https://ucilnice.arnes.si/course/view.php?id=21466'], ['geo - 11 : 15' , 'https://ucilnice.arnes.si/course/view.php?id=25872'], ['slo - 12 : 05' , 'https://ucilnice.arnes.si/course/view.php?id=26225&section=4']];
    let fri = [['ang - 8 : 20' , 'https://ucilnice.arnes.si/course/view.php?id=21466'], ['slo - 9 : 10' , 'https://ucilnice.arnes.si/course/view.php?id=26225&section=4'], ['itd - 10 : 25' , 'https://ucilnice.arnes.si/course/view.php?id=27887'], ['mat - 11 : 15' , 'https://ucilnice.arnes.si/course/view.php?id=57393'], ['gum - 12 : 05' , 'https://ucilnice.arnes.si/course/view.php?id=27459'], ['bio - 12 : 55' , 'https://ucilnice.arnes.si/course/view.php?id=23766']];
    let schoolDay = new Date();
    let schoolWeek = ['0', mon, tue, wen, thu, fri];
    let html = [];
    let enterHtml = " ";
    for (let i = 0; i <= schoolWeek[schoolDay.getDay()].length - 1; i++) {
        html.push('<h3>' + + (i + 1) + ".  " + schoolWeek[schoolDay.getDay()][i][0] + ' - ' + '<a href=' + schoolWeek[schoolDay.getDay()][i][1] + ', target="_blank" >' + schoolWeek[schoolDay.getDay()][i][1] + '</a>' + '</h3>'  + '<br>');
        enterHtml += html[i];
    }
    document.getElementById('demo').innerHTML = enterHtml;
    $("#id").on('click', function () {
    window.open('http://oskoper.splet.arnes.si/files/2021/01/Urnik-9C.pdf', '_blank')
    });
    $(".all").on("click",function(){
      for(let a = 0; a <= schoolWeek[schoolDay.getDay()].length - 1; a++){
             window.open(schoolWeek[schoolDay.getDay()][a][1]);
        }
    });

});
