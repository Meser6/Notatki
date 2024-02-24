// Mozna tworzyc swoje wlasne metryki ktore beda sie zliczaly w trakcie testu
// beda widoczne w raporcie i na ktorych mozna robic sprawdzania

export const options = {
  thresholds: {
    errors: ["count==0"],
  },
};

export default function () {
  const errorMetrics = new Counter("errors"); // metryki moga byc roznych typow (counter, gauge, rate, trend)

  const resp = http.get("https://test.k6.io");

  if (resp.body.error) {
    errorMetrics.add(1);
  }
}
