import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import ResultImc from './resultImc';

export default function Form(){
    
    const [heigth, setHeigth]= useState(null);
    const [weigth, setWeigth]= useState(null);
    const [messageImc, setMessageImc]= useState("Preencha o peso e a altura.");
    const [imc, setImc]= useState(null);
    const [textButton, setTextButton]= useState("Calcular");
    const [TOF, setTOF] = useState(null);
    const [messageTOF, setMessageTOF] = useState(null);
    
    function imcCalculator(){
        var calc = ((weigth/(heigth*heigth)).toFixed(2))
        setImc(calc);
        verResultImc(setImc);
    }

    function validationImc(){
        if(weigth != null && heigth != null){
            imcCalculator();
            setHeigth(null)
            setWeigth(null)
            setMessageResultImc(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular Novamente")
            setMessageTOF("A sua condição atual é:")
            return;
        };
        setTOF(null)
        setMessageTOF(null)
        setImc(null)
        setTextButton("Calcular IMC")
        setMessageImc("Preencha o peso e a altura.")
    }
    
    function verResultImc(imc){
        if(imc > 0){
            setMessageTOF("Baixo peso!");
        } else if(imc >= 18.5){
            setMessageTOF("Intervalo normal!");
        } else if(imc >= 25){
            setMessageTOF("Sobrepeso!");
        } else if(imc >= 30){
            setMessageTOF("Obesidade classe 1!");
        } else if(imc >= 35){
            setMessageTOF("Obesidade classe 2!");
        } else if(imc >= 40){
            setMessageTOF("Obesidade classe 3")
        } else {
            setMessageTOF("Impreciso!");
        }
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                {/* Altura */}
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input}
                onChangeText={setHeigth}
                value={heigth}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                />

                {/* Peso */}
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input}
                onChangeText={setWeigth}
                value={weigth}
                placeholder="Ex. 80"
                keyboardType="numeric"
                />
                {/* Botão */}
                <TouchableOpacity style={styles.buttonCalculator}
                    onPress={() => {
                        validationImc()
                    }}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            {/* Resultado */}
            <ResultImc messageResultImc={messageImc} resultImc={imc} setTOF={setTOF} setMessageTOF={setMessageTOF}/>
        </View>
    );
}