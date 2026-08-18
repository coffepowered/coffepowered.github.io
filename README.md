# coffepowered.github.io

Sorgenti del sito Hugo di Andrea Ruggerini. Il progetto usa
[Hugo Bear Blog](https://github.com/janraasch/hugo-bearblog) con pochi override
locali per l'archivio a due colonne, la sidebar dei tag e le integrazioni
editoriali già presenti nel sito storico.

## Versione Hugo

Il progetto richiede e fissa Hugo `0.165.0` in `.hugo-version`. Non è necessaria
la variante Extended perché il CSS non richiede Sass.

## Anteprima locale

```sh
git submodule update --init --recursive
hugo server --buildDrafts
```

Aprire l'indirizzo mostrato da Hugo, normalmente `http://localhost:1313/`.

## Nuovi articoli

```sh
hugo new content blogs/nome-articolo.md
```

Le opzioni di front matter `math`, `d3` e `twitter` caricano le relative
integrazioni solo nelle pagine che le usano. Lo shortcode Twitter/X carica
automaticamente lo script necessario:

```text
{{</* tweet user="nomeutente" id="1234567890" */>}}
```

Gli articoli storici sono stati recuperati dall'HTML pubblicato tramite
`scripts/recover_hugo_content.py`; i nuovi contenuti possono essere scritti
normalmente in Markdown.
