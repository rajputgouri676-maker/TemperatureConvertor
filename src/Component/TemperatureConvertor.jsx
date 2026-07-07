import { useState } from "react";

const TemperatureConvertor = () => {
  const [temperature, setTemperature] = useState("");
  const [conversion, setConversion] = useState("ctof");
  const [result, setResult] = useState(null);
  const convertTemp = ()=>{
    if(temperature.trim()===""){
        alert("please Enter Temperture");
        return;
    }
    let temp=Number(temperature);
    if(isNaN(temp)){
        alert("enter a valid Temperature");
    }else if(conversion==="ctof"){
        let f=temp *1.8+32;
        setResult(`${temp}°C=${f}°F`);
    }
    else{
        let c=((temp-32)*5)/9;
        setResult(`${temp}°F=${c}°C`);
    }
  };
  const resetData=()=>{
    setTemperature("");
    setConversion("ctof");
    setResult(null);
    
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-130">
        <h1 className="text-3xl font-bold text-center mb-6">
          🌡️ Temperature Convertor
        </h1>
        <input
          type="number"
          placeholder="Enter Temperature"
          className="border w-full p-3 rounded mb-6"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />
        <div className="mb-5">
          <label className="block mb-2">
            <input type="radio" name="temp" value="ctof" checked={conversion==="ctof"}onChange={(e)=>setConversion(e.target.value)} />
            <span className="ml-2">Celsius ⏩ Fahrenheit</span>
          </label>
          <label className="block">
            <input type="radio" name="temp" value="ftoc"  checked={conversion==="ftoc"}
            onChange={(e)=>setConversion(e.target.value)}/>
            <span className="ml-2">Fahrenheit⏩ Celsius</span>
          </label>
        </div>
        <div className="flex gap-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 text-lg font-medium cursor-pointer" onClick={convertTemp}>
            convert
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600 text-lg font-medium cursor-pointer" onClick={resetData}>
            Reset
          </button>
        </div>
        {
            result &&(
                <div className="mt-6 bg-green-100 p-4 rounded text-center">
                    <h2 className="text-xl font-bold">Result</h2>
                    <p className="text-lg mt-2">{result}</p>
                    </div>
            )
        }
      </div>
    </div>
  );
};
export default TemperatureConvertor;

//on change
// chencked ka kaam hai ki jo radio attriute diya hai bo check hua
