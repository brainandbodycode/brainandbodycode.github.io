<template>
    <div v-intake>
        <div id="intakeq"></div>
    </div>
</template>


<script>
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