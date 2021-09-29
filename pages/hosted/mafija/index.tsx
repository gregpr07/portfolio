const files = [
  {
    name: "10_0_1_10",
    description: "Graf posebnega primer L = 1.",
  },
  {
    name: "10_0_0.5_10",
    description: "Graf majhnega začetnega kota in majhne frekvence vlečenja.",
  },
  {
    name: "50_0_0.5_0.01",
    description: "Graf velike frekvence vlečenja.",
  },
  {
    name: "100_0_0.7_2",
    description: "Zanimivo ojačanje.",
  },
  {
    name: "55_0_0.7_5",
    description: "",
  },
  {
    name: "120_0_0.7_5",
    description: "",
  },
  {
    name: "120_0_0.3_5",
    description: "",
  },
];

export default function mafija() {
  return (
    <>
      <div className="px-4 max-w-5xl mx-auto py-32">
        <h1 className="text-2xl">
          Čistejši model parametrične resonance zdviganjem in spuščanjem vrvice
        </h1>
        <ul role="list" className="mt-12 grid grid-cols-1 gap-x-4 gap-y-12">
          {files.map((file) => (
            <li key={file.name} className="relative" id={file.name}>
              <div className="flex flex-col md:flex-row">
                <div className="group block rounded-lg mr-8">
                  <img
                    src={"/hosted/mafija/" + file.name + ".pdf"}
                    alt=""
                    className="object-cover pointer-events-none md:h-80"
                  />
                </div>
                <div className="group block rounded-lg">
                  <img
                    src={"/hosted/mafija/" + file.name + ".gif"}
                    alt=""
                    className="object-cover pointer-events-none md:h-80 md:w-80"
                  />
                </div>
              </div>
              <h2>{file.description}</h2>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
