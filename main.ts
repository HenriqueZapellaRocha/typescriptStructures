import { graph } from "./graph";

let grafo = new graph<String>

grafo.add("a", "b")
grafo.add("a", "c")
grafo.add("a", "d")
grafo.add("a",  "e")
grafo.add("e", "f")

grafo.dfs("a")
