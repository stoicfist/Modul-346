# Git und Versionsverwaltung

## 1. Was ist Git?
Git ist ein verteiltes Versionsverwaltungssystem, das es Entwicklern ermöglicht, den Verlauf von Änderungen im Quellcode zu verfolgen, frühere Versionen wiederherzustellen und in Teams gleichzeitig an einem Projekt zu arbeiten. Git speichert den Zustand von Dateien in sogenannten Commits, die wie Schnappschüsse der jeweiligen Änderungen fungieren. Es wurde ursprünglich von Linus Torvalds entwickelt und ist heute das beliebteste Versionskontrollsystem in der Softwareentwicklung.

## 2. Vorteile der Verwendung eines Versionsverwaltungssystems wie Git
- **Rückverfolgbarkeit:** Git speichert jede Änderung, sodass man jederzeit auf eine frühere Version zurückgreifen kann.
- **Kollaboration:** Mehrere Entwickler können gleichzeitig am selben Projekt arbeiten, ohne sich gegenseitig zu blockieren oder Änderungen zu überschreiben.
- **Verzweigungen und Zusammenführung (Branching und Merging):** Entwickler können in separaten Branches (Zweigen) arbeiten und diese später zusammenführen. Das ermöglicht die parallele Entwicklung von Funktionen und Bugfixes.
- **Sicherheit:** Git speichert die gesamte Historie von Änderungen, sodass nichts verloren geht und Änderungen gut nachvollziehbar bleiben.
- **Effizienz:** Git ist schnell und ressourcenschonend, da es lokal arbeitet und nicht ständig eine Verbindung zu einem Server benötigt.

## 3. Warum ist es sinnvoll, nicht alle Veränderungen auf einmal einzuchecken?
Das Aufteilen von Veränderungen in logische Einheiten ermöglicht:
- **Bessere Nachverfolgbarkeit:** Einzelne Änderungen lassen sich leichter nachvollziehen und verstehen.
- **Leichtere Fehlerbehebung:** Wenn ein Fehler auftritt, kann man schnell erkennen, welche Änderung dafür verantwortlich ist.
- **Revisionssicherheit:** Es wird einfacher, zu einem bestimmten Stand zurückzukehren oder nur bestimmte Änderungen rückgängig zu machen.

## 4. Warum sind viele kleine Commits besser als ein großer Commit?
- **Feingranulare Historie:** Mit mehreren kleinen Commits ist der Verlauf feingranular und zeigt die Entwicklungsschritte im Detail.
- **Einfache Code-Reviews:** Kleine, gut beschriebene Commits erleichtern es anderen Entwicklern, die Änderungen zu verstehen und zu prüfen.
- **Bessere Fehleranalyse:** Bei vielen kleinen Commits kann man den genauen Ursprung eines Fehlers besser eingrenzen und schneller beheben.
- **Flexibilität:** Einzelne Commits können bei Bedarf rückgängig gemacht oder angepasst werden, ohne dass dabei andere Teile des Codes beeinträchtigt werden.

## 5. Wann und wie oft sollte man seine Änderungen einchecken?
Es ist sinnvoll, Änderungen regelmäßig und in sinnvollen Einheiten einzuchecken. Best Practices für Commits umfassen:
- **Nach jeder abgeschlossenen, logischen Einheit:** Sobald eine Funktion oder ein Feature implementiert oder ein Bug behoben wurde, sollte ein Commit erfolgen.
- **Regelmäßig während der Arbeit:** So bleibt die Historie übersichtlich, und es können frühere Zwischenstände jederzeit wiederhergestellt werden.
- **Bei größeren Projekten:** Hier bietet es sich an, Commits nach jedem Entwicklungsschritt zu machen, um den Projektfortschritt transparent und nachvollziehbar zu halten.

Durch regelmäßige und sinnvolle Commits wird die Codequalität verbessert, und die Zusammenarbeit im Team wird effizienter.
