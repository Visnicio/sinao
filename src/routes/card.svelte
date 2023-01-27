<script lang="ts">
    export let id : string;

    export let name : string = "Usuario";
    export let title : string = "Votação 1";
    export let description : string = "Esta é a descrição de uma votação template";
    export let option1 : string = "Sim";
    export let option2 : string = "Não";

    let opt1_count : number = 0;
    let opt2_count : number = 0;

    let opt1_percentage : number = 0;
    let opt2_percentage : number = 0;

    $ : {
        opt1_percentage = opt1_count / (opt1_count + opt2_count) * 100;
        opt2_percentage = 100 - opt1_percentage;

        opt1_percentage = Number((opt1_percentage).toFixed(1))
        opt2_percentage = Number((opt2_percentage).toFixed(1))
    }

</script>

<div class="shadow-xl shadow-orange-100 px-4 py-2 my-5 mx-3 rounded-xl w-64 bg-white col-span-4" id="{id}">
    <h3 class="text-2xl font-bold underline">{title}</h3>
    <div>{description}</div>
    <div class="flex flex-col">
        <button class="px-3 py-2 rounded-2xl my-2 relative z-0 overflow-hidden" on:click={ ()=>{ opt1_count ++; vote()}}>
            <span class="bg-emerald-100 -z-10 h-full absolute block top-0 left-0" style="width: {opt1_percentage}%;"></span>
            <span class="grid grid-cols-12">
                <span class="z-10 col-span-8">{option1}</span>
                <span class="z-10 ">{opt1_percentage}%</span>
            </span>
        </button>
        <button class="px-3 py-2 rounded-2xl my-2 relative z-0 overflow-hidden" on:click={ ()=>{ opt2_count ++; vote()}}>
            <span class="bg-red-100 w-[{opt2_percentage}%] -z-10 h-full absolute block top-0 left-0 " style="width: {opt2_percentage}%;"></span>
            <span class="grid grid-cols-12">
                <span class="z-10 col-span-8">{option2}</span>
                <span class="z-10 ">{opt2_percentage}%</span>
            </span>
        </button>
    </div>
</div>
