/*
 * @Author: huayang
 * @Description:
 * @Date: 2022-08-30 16:33:38
 * @LastEditTime: 2022-08-31 17:42:40
 * @FilePath: \huayang_ui\src\button\jsxButton.tsx
 */
import "uno.css";
import { defineComponent, PropType } from "vue";
export type IColor =
	| "black"
	| "gray"
	| "red"
	| "yellow"
	| "green"
	| "blue"
	| "indigo"
	| "purple"
	| "pink";
export type ISize = "small" | "medium" | "large";
export const props = {
	size: {
		type: String as PropType<ISize>,
		default: "medium"
	},
	color: {
		type: String as PropType<IColor>,
		default: "blue"
	},
	round: {
		type: Boolean,
		default: false
	},
	plain: {
		type: Boolean,
		default: false
	},
	icon: {
		type: String,
		default: ""
	}
};

export default defineComponent({
	name: "jsxButton",
	props,
	setup(props, { slots }) {
		const size = {
			small: {
				x: "2",
				y: "1",
				text: "sm"
			},
			medium: {
				x: "3",
				y: "2",
				text: "base"
			},
			large: {
				x: "4",
				y: "3",
				text: "lg"
			}
		};
		return () => (
			<button
				class={`
    py-${size[props.size].y}
    px-${size[props.size].x}
    
    ${props.round ? "rounded-full" : "rounded-lg"}
    
    bg-${props.color}-${props.plain ? "100" : "500"} 
    hover:bg-${props.color}-${props.plain ? "500" : "700"}

    border-${props.color}-${props.plain ? "500" : "500"}
    border-solid

    text-${props.plain ? props.color + "-500" : "white"}
    text-${size[props.size].text}
    hover:text-white

    font-semibold 
    shadow-md
    cursor-pointer 
    transition duration-300 ease-in-out transform hover:scale-105
    m-1
    `}
			>
				{props.icon !== "" ? (
					<i class={`i-ic-baseline-${props.icon} p-3`}></i>
				) : (
					""
				)}
				{slots.default ? slots.default() : ""}
			</button>
		);
	}
});
