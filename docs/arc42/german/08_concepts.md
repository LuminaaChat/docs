# Querschnittliche Konzepte

<div class="formalpara-title">

**Inhalt**

</div>

Dieser Abschnitt beschreibt übergreifende, prinzipielle Regelungen und
Lösungsansätze, die an mehreren Stellen (=*querschnittlich*) relevant
sind.

Solche Konzepte betreffen oft mehrere Bausteine. Dazu können vielerlei
Themen gehören, beispielsweise:

- Modelle, insbesondere fachliche Modelle

- Architektur- oder Entwurfsmuster

- Regeln für den konkreten Einsatz von Technologien

- prinzipielle — meist technische — Festlegungen übergreifender Art

- Implementierungsregeln

<div class="formalpara-title">

**Motivation**

</div>

Konzepte bilden die Grundlage für *konzeptionelle Integrität*
(Konsistenz, Homogenität) der Architektur und damit eine wesentliche
Grundlage für die innere Qualität Ihrer Systeme.

Manche dieser Themen lassen sich nur schwer als Baustein in der
Architektur unterbringen (z.B. das Thema „Sicherheit“).

<div class="formalpara-title">

**Form**

</div>

Kann vielfältig sein:

- Konzeptpapiere mit beliebiger Gliederung,

- übergreifende Modelle/Szenarien mit Notationen, die Sie auch in den
  Architektursichten nutzen,

- beispielhafte Implementierung speziell für technische Konzepte,

- Verweise auf „übliche“ Nutzung von Standard-Frameworks
  (beispielsweise die Nutzung von Hibernate als Object/Relational
  Mapper).

<div class="formalpara-title">

**Struktur**

</div>

Eine mögliche (nicht aber notwendige!) Untergliederung dieses
Abschnittes könnte wie folgt aussehen (wobei die Zuordnung von Themen zu
den Gruppen nicht immer eindeutig ist):

- Fachliche Konzepte

- User Experience (UX)

- Sicherheitskonzepte (Safety und Security)

- Architektur- und Entwurfsmuster

- Unter-der-Haube

- Entwicklungskonzepte

- Betriebskonzepte

![Possible topics for crosscutting
concepts](images/08-Crosscutting-Concepts-Structure-DE.png)

Siehe [Querschnittliche Konzepte](https://docs.arc42.org/section-8/) in
der online-Dokumentation (auf Englisch).

## Rollen & Rechte

## Permissions

|abbreviation|description| hint          |
|----|----|---------------|
|C|Create|               |
|D|Delete|               |
|R|Read|               |
|E|Export|               |
|M|Mute|               |
|P|Pin| Messages only |
|X|Forbidden|               |

## Assignments

|Roll/Object | Messages|(Group)-Chat|Group-Users|Groups|Users|Archive|Contacts|
|----|----|----|----|----|----|----|----|
|**User-Client**|C,R|R|R|-|-|X|-|
|**User-Employee**|C,D,R,P (assigned)|R,E*|R,M|-|-|X|R|
|**User-Leg.Guardian**|C,R|R|R|-|-|X|-|
|**Admin-Functional**|X|C,D|C,D,R|C,D,R,E|C,D,R,E|X|C,D,R|
|**User-Supervisor**|C,D,R,P (all)|R,E|R,M|R|R|X|R|
|**root**|X|C,D,R|C,D,R|C,D,R|C,D,R|R,E|C,D,R|

## *\<Konzept 2>*

*\<Erklärung>*

…

## *\<Konzept n>*

*\<Erklärung>*
