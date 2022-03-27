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
        console.log("calc="+calc)
        setImc(calc);
        verResultImc(calc);
        return;
    }

    function validationImc(){
        if(weigth != null && heigth != null){
            console.log("hit2")
            imcCalculator();
            console.log("hit3")
            setHeigth(null)
            console.log("hit4")
            setWeigth(null)
            console.log("hit5")
            // setMessageResultImc(null)
            console.log("hit6")
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
    
    function verResultImc(intImc){
        console.log("hitverResultImc")
        intImc = parseInt(intImc)
        console.log(intImc)
        if(intImc < 0){
            setTOF("Baixo peso!");
        } else if(intImc >= 18.5){
            console.log("hit SET");
            setTOF("Intervalo normal!");
        } else if(intImc >= 25){
            setTOF("Sobrepeso!");
        } else if(intImc >= 30){
            setTOF("Obesidade classe 1!");
        } else if(intImc >= 35){
            setTOF("Obesidade classe 2!");
        } else if(intImc >= 40){
            setTOF("Obesidade classe 3")
        } else {
            setTOF("Impreciso!");
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
            <ResultImc messageResultImc={messageImc} resultImc={imc} setMessageTOF={messageTOF} setTOF={TOF} />

        </View>
    );
}