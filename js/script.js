$.getJSON('https://script.google.com/macros/s/AKfycbyYaOJ2ZJ0fL4SoSUv46SbIGVzejO8liHgoQe14LoRjHCBZHbk/exec?id=1l8x_hm3nPHVPc5bi2yF3SFJE9Q7Ls43h8RUSSDhJIGw&sheet=Sheet1', function (dataku) {
    let info = dataku.data;

    $.each(info, function (i, isidata) {

        $('#taruhdisini').append(`
                            <tr>
                                <td>` + isidata.NO + `</td>
                                <td>` + isidata.NAMALENGKAP + `</td>
                                <td>` + isidata.PRODI + `</td>
                                <td>` + isidata.GRUP + `</td>
                                <td>` + isidata.ANGKATAN + `</td>
                                <td>` + isidata.SEMESTER1 + `</td>
                                <td>` + isidata.SEMESTER2 + `</td>
                                <td>` + isidata.SEMESTER3 + `</td>
                                <td>` + isidata.SEMESTER4 + `</td>
                                <td>` + isidata.SEMESTER5 + `</td>
                                <td>` + isidata.SEMESTER6 + `</td>
                                <td>` + isidata.SEMESTER7 + `</td>
                                <td>` + isidata.SEMESTER8 + `</td>
                            </tr>

                            `);
    });


    $.each(info, function (i, isidata) {
        $('#SekarangSemester').append(isidata.sekarangSemester);
    });
    // $.each(info, function (i, isidata) {
    //     $('#ok').append(isidata.totalSum);
    // });

    $.each(info, function (i, isidata) {
        $('#pemasukan').append(isidata.pemasukan);
    });

    $.each(info, function (i, isidata) {
        $('#keteranganPemasukan').append(isidata.keteranganPemasukan);
    });

    $.each(info, function (i, isidata) {

        $('#taruhdatadetaildisini').append(`
                            <tr>
                                <td>` + isidata.pemasukan + `</td>
                                <td>` + isidata.keteranganPemasukan + `</td>
                            </tr>

                            `);
    });



});

