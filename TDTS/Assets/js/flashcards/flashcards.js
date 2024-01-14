let flashcards = [
    {
        id: 0,
        concept: "Phishing",
        definition: "Oszustwo internetowe, w którym przestępcy podszywają się pod zaufane instytucje w celu uzyskania poufnych informacji.",
        note: "1. Bądź ostrożny przy klikaniu na linki w e-mailach, <br> 2. Sprawdzaj dokładnie adresy URL, <br> 3. Nie udostępniaj poufnych danych na żądanie nieznanych źródeł"
    },
    {
        id: 1,
        concept: "Ransomware ",
        definition: "Złośliwe oprogramowanie, które blokuje dostęp do komputera lub danych i wymaga zapłaty okupu za ich odblokowanie.",
        note: "1. Wykonuj regularne kopie zapasowe danych, <br> 2. Instaluj i aktualizuj oprogramowanie antywirusowe i antymalware, <br> 3. Uważaj na linki w wiadomościach e-mail i SMS-ach",
    },
    {
        id: 2,
        concept: "Malware",
        definition: "Ogólna nazwa złośliwego oprogramowania, takiego jak wirusy, trojany czy robaki komputerowe.",
        note: "1. Regularnie skanuj komputer oprogramowaniem antywirusowym, <br> 2. Aktualizuj system operacyjny i oprogramowanie, <br> 3. Unikaj pobierania plików z niezaufanych źródeł.",
    },
    {
        id: 3,
        concept: "Spyware",
        definition: "Oprogramowanie szpiegujące, które zbiera informacje o użytkowniku bez jego zgody.",
        note: "1. Używaj programów antyspyware, <br> 2. Unikaj klikania na podejrzane reklamy, <br> 3. Sprawdzaj ustawienia prywatności.",
    },
    {
        id: 4,
        concept: "Atak DDoS",
        definition: "Atak polegający na przeciążeniu serwera czy sieci, uniemożliwiający dostęp dla prawidłowych użytkowników.",
        note: "1. Używaj firewalli i systemów zabezpieczających przed atakami DDoS, <br> 2. Monitoruj ruch sieciowy, <br> 3. Korzystaj z usług dostawców świadczących ochronę przed atakami DDoS.",
    },
    {
        id: 5,
        concept: "Man-in-the-Middle Attack",
        definition: "Atak, w którym atakujący przechwytuje i manipuluje komunikacją pomiędzy dwoma stronami.",
        note: "1. Korzystaj z bezpiecznych, zaszyfrowanych połączeń (HTTPS), <br> 2. Unikaj korzystania z publicznych sieci Wi-Fi, <br> 3. Używaj VPN do zabezpieczenia połączeń internetowych.",
    },
    {
        id: 6,
        concept: "Zagrożenia dla prywatności",
        definition: "Zagrożenia dla prywatności polegają na zbieraniu i wykorzystywaniu danych użytkowników, często bez ich świadomej zgody.",
        note: "Aby skutecznie chronić swoją prywatność w internecie, warto stosować szereg praktyk i zasad bezpieczeństwa. <br><br> 1. Silne hasła i autoryzacja dwuetapowa, <br> 2. Aktualizuj oprogramowanie i używaj oprogramowania antywirusowego, <br> 3. Dostosuj ustawienia prywatności, <br> 4. Korzystaj z VPN, <br> 5. Unikaj podejrzanych linków i plików, <br> 6. Monitoruj aktywność online, <br> 7. Bądź świadomy phishingu",
    },
    {
        id: 7,
        concept: "Cyberprzemoc",
        definition: "forma przemocy, agresji lub szkodliwego zachowania, które występuje w przestrzeni cyfrowej. Obejmuje ona różne formy ataków, zarówno jednostkowe, jak i zorganizowane, wymierzone w osoby lub grupy.",
        note: "Zachowanie zdrowego podejścia do korzystania z internetu, edukacja oraz świadomość zagrożeń są kluczowe dla skutecznej ochrony przed cyberprzemocą. W razie potrzeby skorzystaj z dostępnych zasobów wsparcia i porad ekspertów.",
    },
    {
        id: 8,
        concept: "Niebezpieczne reklamy (malvertising) ",
        definition: "Malvertising to praktyka umieszczania złośliwego kodu w reklamach internetowych. Gdy użytkownik kliknie na taką reklamę, może zostać zainfekowany szkodliwym oprogramowaniem, takim jak wirusy, trojany czy ransomware.",
        note: "1. Używaj adblocków, <br> 2. Unikaj klikania na reklamy, <br> 3. Korzystaj z bezpiecznych stron, <br> 4. Ustaw zabezpieczenia antywirusowe, <br> 5. Monitoruj aktywność swojego konta, <br><br> Malvertising jest jednym z subtelnych zagrożeń online, dlatego ważne jest, aby być świadomym i podejść z ostrożnością do korzystania z internetu, zwłaszcza w kontekście reklam i innych treści pochodzących z nieznanych źródeł.",
    },
    {
        id: 9,
        concept: "Spoofing",
        definition: "To technika manipulacji, w której atakujący fałszuje lub modyfikuje informacje, aby wyglądały, jakby pochodziły od zaufanego źródła. Może to obejmować fałszowanie adresów IP, e-maili, numerów telefonów czy innych danych identyfikacyjnych.",
        note: "Spoofing jest zróżnicowaną techniką ataku, dlatego ważne jest, aby stosować różnorodne środki bezpieczeństwa i być świadomym zagrożeń związanych z fałszowaniem informacji.",
    },
    {
        id: 10,
        concept: "Botnet",
        definition: "Botnet to grupa zdalnie kontrolowanych komputerów lub urządzeń, które zostały zainfekowane przez złośliwe oprogramowanie. Kontroler botnetu może używać tych zainfekowanych urządzeń do wykonywania różnych zadań bez wiedzy ich właścicieli.",
        note: "Botnety stanowią poważne zagrożenie dla bezpieczeństwa cybernetycznego, ponieważ ich potencjał jest wykorzystywany do różnych złośliwych celów. Stosowanie środków ochronnych, edukacja w zakresie bezpieczeństwa online i regularne aktualizacje oprogramowania to kluczowe kroki w zapobieganiu infekcjom botnetami.",
    },
    
]