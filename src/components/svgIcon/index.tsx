import {defineComponent} from 'vue'
import style from './icon.module.scss'
export const useSvgIcon = defineComponent({
    name: 'svgIcon',
    props: {
        iconClass: {
            type: String,
            default: ""
        },
        className: {
            type: String,
            default: '',
          },
    },
    setup(props) {
        return () => (
            <>
                <svg  id="svg-icon" class={`svg-icon ${props.className} ${style.svgIcon}`} aria-hidden="true">
                    <use xlinkHref={`#icon-${props.iconClass}`}></use>
                </svg>
            </>
        )
    }
})
