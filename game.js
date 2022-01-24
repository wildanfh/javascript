alert('Hay');

// mengambil inputan user
alert('Masukkan angka 1 - 10 \nAnda memiliki 3 kesempatan');
var user = prompt('Masukkan angka tebakan');

// Membuat rules komputer
var kom = Math.random();
if( kom < 0.10 ) {
    kom = '1';
} else if( kom >= 0.10 && kom < 0.20 ) {
    kom = '2';
} else if( kom >= 0.20 && kom < 0.30 ) {
    kom = '3';
} else if( kom >= 0.30 && kom < 0.40 ) {
    kom = '4';
} else if( kom >= 0.40 && kom < 0.50 ) {
    kom = '5';
} else if( kom >= 0.50 && kom < 0.60 ) {
    kom = '6';
} else if( kom >= 0.60 && kom < 0.70 ) {
    kom = '7';
} else if( kom >= 0.70 && kom < 0.80 ) {
    kom = '8';
} else if( kom >= 0.80 && kom < 0.90 ) {
    kom = '9';
} else {
    kom = '10';
}

// Menentukan var rules
var hasil = '';
if( user == kom ) {
    hasil = 'BENAR!';
} else if( user == '1' ) {
    if( kom > '1' ) {
        hasil = 'Terlalu RENDAH!';
    }
} else if( user == '2' ) {
    if( kom > '2' ) {
        hasil = 'Terlalu RENDAH!';
    } else {
        hasil = 'Terlalu TINGGI!';
    }
} else if( user == '3' ) {
    if( kom > '3' ) {
        hasil = 'Terlalu RENDAH!';
    } else {
        hasil = 'Terlalu TINGGI!';
    }
} else if( user == '4' ) {
    if( kom > '4' ) {
        hasil = 'Terlalu RENDAH!';
    } else {
        hasil = 'Terlalu TINGGI!';
    }
} else if( user == '5' ) {
    if( kom > '5' ) {
        hasil = 'Terlalu RENDAH!';
    } else {
        hasil = 'Terlalu TINGGI!';
    }
} else if( user == '6' ) {
    if( kom > '6' ) {
        hasil = 'Terlalu RENDAH!';
    } else {
        hasil = 'Terlalu TINGGI!';
    }
} else if( user == '7' ) {
    if( kom > '7' ) {
        hasil = 'Terlalu RENDAH!';
    } else {
        hasil = 'Terlalu TINGGI!';
    }
}else if( user == '8' ) {
    if( kom > '8' ) {
        hasil = 'Terlalu RENDAH!';
    } else {
        hasil = 'Terlalu TINGGI!';
    }
} else if( user == '9' ) {
    if( kom > '9' ) {
        hasil = 'Terlalu RENDAH!';
    } else {
        hasil = 'Terlalu TINGGI!';
    }
} else if( user == '10' ) {
    if( kom < '10' ) {
    hasil = 'Terlalu TINGGI!';
    } else {
        hasil = 'Terlalu TINGGI!';
    }
} else {
    hasil = 'Melampaui BATAS!!';
}


// if( user == kom ) {
//     hasil = 'BENAR!';
// } else if( user < kom ) {
//     hasil = 'Terlalu RENDAH!';
// } else if( user > kom ) {
//     hasil = 'Terlalu TINGGI!';
// } else {
//     hasil = 'Melampaui batas';
// }



    // if( user < kom || user > kom ) {
    //     alert('Tebakan anda ' + hasil );
    //     var user = prompt('Anda memiliki 2 kesempatan lagi');
    //     if( user < kom || user > kom ) {
    //         alert('Tebakan anda ' + hasil );
    //         var user = prompt('Anda memiliki 1 kesempatan lagi');
    //         if( user < kom || user > kom ) {
    //             alert('Tebakan anda ' + hasil );
    //             alert('Kesempatan anda habis!');
    //         } else if( user == kom ) {
    //             alert('Tebakan anda ' + hasil );
    //         } else {
    //         alert('Tebakan anda ' + hasil ); 
    //         }
    //     } else if( user == kom ) {
    //         alert('Tebakan anda ' + hasil );
    //     }else {
    //         alert('Tebakan anda ' + hasil );
    //     }
    // } else if( user == kom ) {
    //     alert('Tebakan anda ' + hasil );
    // }else {
    //     alert('Tebakan anda ' + hasil );
    // }



    // for (var kesempatan = 3; kesempatan > 0; kesempatan--){
    //     var user = prompt('Masukkan salah satu angka 1 - 10. ada ' + kesempatan + ' kali kesempatan')
    //     var sisaKesempatan = kesempatan - 1
    //     if(user == kom){
    //         hasil = alert('Jawaban kamu benar')
    //         kesempatan = 0
    //     }else if(user < kom){
    //         if(sisaKesempatan == 0){
    //             hasil = alert('Jawaban kamu salah. Yang benar adalah ' + kom)
    //         }else{
    //             hasil = alert('Jawaban kamu kekecilan. ' + sisaKesempatan + ' kesempatan tersisa')
    //         }
    //     }else if(user > kom){
    //         if(sisaKesempatan == 0){
    //             hasil = alert('Jawaban kamu salah. Yang benar adalah ' + kom)
    //         }else{
    //             hasil = alert('Jawaban kamu kebesaran. ' + sisaKesempatan + ' kesempatan tersisa')
    //         }
    //     }
    // }


for ( var kesempatan = 2; kesempatan > 0; kesempatan-- ) {
    if( user == kom ) {
        alert('Tebakan kamu ' + hasil );
        kesempatan == 0;
    } else {
        alert( 'Tebakan kamu ' + hasil );
        user = prompt('Kamu memiliki ' + kesempatan + ' kesempatan lagi..');
    }
}




// MASIH SALAH






