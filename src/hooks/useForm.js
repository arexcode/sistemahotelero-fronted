import { useRef, useState } from "react";

export const useForm = ( initialForm = {}) => {

    const initialRef = useRef(initialForm);
    const [ formState, setFormState ] = useState(() => initialRef.current );

    const onInputChanged = ({ target }) => {
        const { name, value } = target

        setFormState({
            ...formState, 
            [ name ]: value
        })
    }

    const onResetForm = () => {
        setFormState( initialRef.current )
    }

    return({
        ...formState,
        formState,
        onInputChanged,
        onResetForm,
    })

}