$("#nueva-observacion").click(
    function () {
        var dia = $("#dia").val();
        var avance = $("#avance").val();
        var temp = $("#temp").val();
        $("#infeccion tr:last").after('<tr><td>' + dia + '</td><td>' + avance + '</td><td>' + temp + '</td></tr>');
        $("#exampleModal").modal("toggle");
    }
)