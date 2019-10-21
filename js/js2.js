$.getJSON('https://script.google.com/macros/s/AKfycbyYaOJ2ZJ0fL4SoSUv46SbIGVzejO8liHgoQe14LoRjHCBZHbk/exec?id=1l8x_hm3nPHVPc5bi2yF3SFJE9Q7Ls43h8RUSSDhJIGw&sheet=Sheet2', function (dataku) {
    let info = dataku.data;

    $.each(info, function (i, isidata) {

        $('#taruhDataDetailPemasukan').append(`
                            <tr>
                                <td>` + isidata.Pemasukan + `</td>
                                <td>` + isidata.KeteranganPemasukan + `</td>
                            </tr>

                            `);
    });

    $.each(info, function (i, isidata) {

        $('#taruhDataDetailPengeluaran').append(`
                            <tr>
                                <td>` + isidata.Pengeluaran + `</td>
                                <td>` + isidata.KeteranganPengeluaran + `</td>
                            </tr>

                            `);
    });

    $.each(info, function (i, isidata) {

        $('#taruhDataDetailSisa').append(`
                            <tr>
                                <td>` + isidata.Sisa + `</td>
                                <td>` + isidata.KeteranganSisa + `</td>
                            </tr>

                            `);
    });



});

