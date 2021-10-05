export default class Fecha {
    
    static meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ]

    static diasSemana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sabado']

    static getMarcaTiempo(fechaIn) {
        const diaSemana = this.diasSemana[new Date(fechaIn).getDay()];
        const dd = new Date().getDate();
        const MM = this.meses[new Date().getMonth()];
        const yyyy = new Date().getFullYear();
        const hh = ('0' + new Date().getHours()).slice(-2);
        const mm = ('0' + new Date().getMinutes()).slice(-2);
        const ss = ('0' + new Date().getSeconds()).slice(-2);

        return `${diaSemana}, ${dd} de ${MM} de ${yyyy} a las ${hh}:${mm}:${ss}`;
    }
}