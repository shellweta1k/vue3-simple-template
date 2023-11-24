import { defineComponent } from "vue";
import { useSvgIcon } from '@/components/svgIcon/index';
import style from './asideItem.module.scss'
export const useAsideItem = defineComponent({
    name: "asideItem",
    props: {
        meta: {
            type: Object,
            default: () => {}
        },
        showTitle: {
            type: Boolean,
            default: false
        }
    },

    components: {
        useSvgIcon
    },
    setup(props) {
        const {showTitle, meta} = props
        const {icon, menuName} = meta
        return () => (
            <>
                <div class={style.asideItem}>
                    <useSvgIcon className={icon} iconClass={icon} />
                    {menuName && showTitle &&  <span>{menuName}</span>}
                </div>
            </>
        )
    },
})