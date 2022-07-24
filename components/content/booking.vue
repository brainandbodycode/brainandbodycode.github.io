<template>
    <!-- <iframe v-frame="'https://app.squarespacescheduling.com/schedule.php?owner=26788133&appointmentType=35501038'"
        title="Schedule Appointment" width="100%" height="100%" frameBorder="0"></iframe> -->
    <div ref="booking">
        <div id="intakeq" style="width: 100%;"></div>
    </div>
</template>


<script>
import iframeResize from 'iframe-resizer/js/iframeResizer';

export default {
    // directives: {
    //     frame: {
    //         mounted(el, src) {
    //             // el.addEventListener('load', () => iframeResize({}, el))
    //             iframeResize({ log: true }, el);
    //             el.setAttribute("src", src.value);
    //         },
    //         unmounted(el) {
    //             console.log(el.iFrameResizer)
    //             el.iFrameResizer.removeListeners();
    //         }
    //     }
    // },
    mounted() {
        window.intakeq = "62dcb6cada9e6433106f200a";
        var i = document.createElement("script");
        i.type = "text/javascript";
        i.async = true; i.src = "https://intakeq.com/js/widget.min.js?1";
        this.$refs.booking.appendChild(i);
    }
}
</script>