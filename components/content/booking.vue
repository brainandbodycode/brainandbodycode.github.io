<template>
    <!-- <iframe v-frame="'https://app.squarespacescheduling.com/schedule.php?owner=26788133&appointmentType=35501038'"
        title="Schedule Appointment" width="100%" height="100%" frameBorder="0"></iframe> -->
    <div v-intake>
        <div id="intakeq"></div>
    </div>
</template>


<script>
import iframeResize from 'iframe-resizer/js/iframeResizer';

export default {
    directives: {
        intake: {
            mounted(el) {
                window.intakeq = "62dcb6cada9e6433106f200a";
                var i = document.createElement("script");
                i.type = "text/javascript";
                i.async = true;
                i.src = "https://intakeq.com/js/widget.min.js?1";
                el.appendChild(i);
            },
            unmounted(el) {
                window.intakeq = undefined;
                const iframe = el.querySelector('iframe');
                const script = el.querySelector('script');
                iframe.remove();
                script.remove();
            }
        }
    },
}
</script>