<script lang="ts">
	import Card from "./card.svelte";

    let name : string = "Usuario"
</script>

<div>
    <nav>
        <div class="bg-orange-400">
            <div class="container mx-auto flex justify-between py-10 text-white items-center">
                <h1 class="font-bold text-4xl">Untitled Project</h1>
                <button class="border-2 border-white px-4 py-6 rounded-2xl hover:bg-white hover:text-black hover:border-orange-400 transition-all duration-100">Login With Google</button>
            </div>
        </div>
    </nav>
    <div class="container mx-auto">
        <div class="grid grid-cols-12 justify-items-center">
            <Card title="Teste de votação" description="Isto é apenas um teste de votação" id="123323"/>
            <Card title="Você usaria este app?" description="Você usaria um site onde pessoa podem votar em tudo? " id="1233"/>
            <Card title="Devo usar firebase?" description="Eu devo usar firebase para criar este site?" id="321"/>
        </div>
    </div>
</div>

