import { defineComponent, h, onMounted, ref } from "vue";
import { RenderDefault } from "vuepress-shared/client";
import { FadeSlideY } from "@theme-hope/components/transitions/index";
import { usePure } from "@theme-hope/composables/index";
import PasswordModal from "@theme-hope/modules/encrypt/components/PasswordModal";
import { useGlobalEncrypt } from "@theme-hope/modules/encrypt/composables/index";
export default defineComponent({
    name: "GlobalEncrypt",
    slots: Object,
    setup(_props, { slots }) {
        const { status, validate } = useGlobalEncrypt();
        const isPure = usePure();
        const isMounted = ref(false);
        onMounted(() => {
            isMounted.value = true;
        });
        return () => {
            const { isEncrypted, isLocked, hint } = status.value;
            return h(isPure.value ? RenderDefault : FadeSlideY, () => isEncrypted
                ? isMounted.value
                    ? isLocked
                        ? h(PasswordModal, {
                            full: true,
                            hint,
                            onVerify: validate,
                        })
                        : slots.default()
                    : null
                : slots.default());
        };
    },
});
//# sourceMappingURL=GlobalEncrypt.js.map