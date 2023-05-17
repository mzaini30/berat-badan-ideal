<script>
  import rumus_berat from "../rumus";

  let tinggi;
  let jenis_kelamin;
  let berat;

  function cek() {
    berat = rumus_berat(tinggi, jenis_kelamin);
  }

  $: tinggi ? cek() : cek();
  $: jenis_kelamin ? cek() : cek();
</script>

<div
  class="p-3 grid grid-cols-1 gap-3 [&_.inputan]:border-slate-700 [&_.inputan]:border [&_.inputan]:w-full [&_.inputan]:block [&_.inputan]:p-1"
>
  <p>Tinggi (cm)</p>
  <input bind:value={tinggi} class="inputan" type="tel" />
  <p>Jenis Kelamin</p>
  <select bind:value={jenis_kelamin} class="inputan">
    <option value="pria">Pria</option>
    <option value="wanita">Wanita</option>
  </select>
  <p>Berat Badan Ideal (kg)</p>
  <input value={berat} class="inputan" readonly />
</div>
