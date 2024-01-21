let flashcards = [
    {
        id: 0,
        concept: "Silne Hasło",
        defName: "Czym jest Hasło:",
        def: "Hasło to poufny ciąg znaków, który służy do uwierzytelniania tożsamości użytkownika i zabezpieczania dostępu do różnych kont, systemów czy usług. Jest to kluczowy element ochrony prywatności online i offline. <br><br>Zagrożenia Wynikające z Wycieku Hasła: <br>&nbsp;1. Kradzież Tożsamości. <br>&nbsp;2. Utrata Kontroli nad Kontem. <br>&nbsp;3. Wyciek Prywatnych Informacji.<br>&nbsp;4. Ryzyko Finansowe.<br>&nbsp;5. Ataki Phishingowe",
        protName: "Jak chronić hasło:",
        prot: "&nbsp;1. Używaj różnych haseł dla różnych kont. Jeśli używasz tego samego hasła dla wszystkich swoich kont, a jedno z nich zostanie naruszone, wszystkie inne konta również będą narażone. <br>2. Nie używaj haseł, które są łatwe do odgadnięcia, takich jak Twoje imię, nazwisko lub data urodzin. <br>3. Zmieniaj hasła regularnie, co najmniej raz na 6 miesięcy. <br>4. Używaj menedżera haseł, aby ułatwić sobie ich zapamiętywanie. <br><br>Jeśli podejrzewasz, że Twoje hasło zostało naruszone, natychmiast zmień je i poinformuj o tym swoich usługodawców."
    },
    {
        id: 1,
        concept: "Weryfikacja Dwuetapowa (2FA)",
        defName: "Czym jest 2FA:",
        def: "Dwuskładnikowa autentykacja (2FA) to metoda zabezpieczania dostępu do konta, systemu lub usługi, która wymaga podania dwóch niezależnych od siebie rodzajów informacji uwierzytelniających w celu potwierdzenia tożsamości użytkownika. <br>Jak Działa 2FA: <br>Użytkownik wpisuje standardowe hasło, a następnie dostarcza drugi czynnik autentykacyjny, który może być wygenerowany na przykład przez aplikację mobilną, wysłany na numer telefonu, czy odczytany z fizycznego tokena.",
        protName: "Korzyści i Zagrożenia Związane z 2FA:",
        prot: "Korzyści Związane z 2FA: <br>&nbsp;1. Wzmocnione Bezpieczeństwo. <br>&nbsp;2. Ochrona Przed Kradzieżą Hasła. <br> Zagrożenia Dla 2FA: <br>&nbsp;1. Phishing <br>&nbsp;2. Sms-Spoofing. <br>&nbsp;3. Pharming. <br>&nbsp;4. Ataki Man-in-the-Middle (MitM<br>&nbsp;5. Ataki na Aplikacje Autoryzacyjne."
    },
    {
        id: 2,
        concept: "Oprogramowanie Antywirusowe",
        defName: "Czym Jest Antywirus:",
        def: "Oprogramowanie antywirusowe to rodzaj programu komputerowego, którego głównym celem jest ochrona systemu przed szkodliwym oprogramowaniem, takim jak wirusy, trojany, robaki, ransomware czy inne rodzaje malware. Działa poprzez monitorowanie aktywności systemu, skanowanie plików oraz identyfikację i usuwanie potencjalnie niebezpiecznych zagrożeń.",
        protName: "Zagrożenia Dla Antywirusów:",
        prot: "&nbsp;1. Ataki na Same Oprogramowanie Antywirusowe. <br>&nbsp;2. Brak Aktualizacji Bazy Sygnatur. <br>&nbsp;3. Ominięcie Ochrony przez Nowe Zagrożenia. <br>&nbsp;4. Ataki Phishingowe. <br>&nbsp;5. Wycieki Danych Oprogramowania Antywirusowego. <br><br>Podsumowując, choć oprogramowanie antywirusowe stanowi kluczowy element ochrony przed szkodliwym oprogramowaniem, musi być stosowane z umiarem i w połączeniu z innymi środkami bezpieczeństwa, aby efektywnie bronić system przed różnymi zagrożeniami."
    },
    {
        id: 3,
        concept: "Firewall",
        defName: "Czym Jest Firewall:",
        def: "Firewall to system zabezpieczeń komputerowych, który kontroluje ruch sieciowy między sieciami o różnym poziomie zaufania. Jego głównym celem jest monitorowanie, blokowanie lub zezwalanie na przepływ danych w zależności od określonych reguł bezpieczeństwa. Firewall może być stosowany zarówno w poziomie sprzętowym (na poziomie routera czy dedykowanego urządzenia) jak i w poziomie programowym (na poziomie oprogramowania na komputerze).",
        protName: "Funkcje i Zagrożenia dla Firewalla:",
        prot: "Funkcje Firewalla: <br> &nbsp1. Kontrola Dostępu. <br>&nbsp2. Ochrona przed Atakami. <br>&nbsp3. Filtrowanie Treści. <br>Zagrożenia Dla Firewalla: <br>&nbsp1. Ataki Brute Force. <br>&nbsp2. Ataki DoS. <br>&nbsp3. Błędy Konfiguracyjne. <br>&nbsp4. Ataki Spoofingowe. <br><br>Ważne jest, aby firewalle były odpowiednio skonfigurowane i utrzymywane zgodnie z aktualnymi standardami bezpieczeństwa."
    },
    {
        id: 4,
        concept: "VPN (Virtual Private Network)",
        defName: "Czym jest VPN:",
        def: "VPN (Virtual Private Network) to technologia pozwalająca na tworzenie bezpiecznego i prywatnego połączenia między urządzeniem użytkownika a internetem. VPN tworzy tunel szyfrowany, który zapewnia bezpieczną transmisję danych przez publiczną infrastrukturę sieciową, taką jak internet. Podstawowym celem VPN jest ochrona prywatności, bezpieczeństwa i anonimowości użytkownika w trakcie korzystania z internetu.",
        protName: "Funkcje i Zagrożenia VPN:",
        prot: "Funkcje VPN: <br>&nbsp1. Szyfrowanie Ruchu. <br>&nbsp2. Maskowanie Adresu IP<br>&nbsp3. Bezpieczne Połączenie Zdalne. <br>Zagrożenia Dla VPN: <br>&nbsp1. Słabe Szyfrowanie. <br>&nbsp2. Śledzenie Użytkownika <br>&nbsp3. Ataki DNS Spoofing. <br><br>Podsumowując, VPN jest skutecznym narzędziem do zabezpieczania połączeń internetowych, jednak użytkownicy powinni być świadomi potencjalnych zagrożeń i stosować się do praktyk bezpieczeństwa."
    },
    {
        id: 5,
        concept: "Aktualizacje Systemu Operacyjnego",
        defName: "Czym Są Aktualizacje Systemu:",
        def: "Aktualizacje systemu operacyjnego to proces wprowadzania zmian, poprawek i ulepszeń do oprogramowania kontrolującego działanie komputera lub urządzenia mobilnego. Systemy operacyjne, takie jak Windows, macOS, Linux, Android czy iOS, regularnie otrzymują aktualizacje, które mogą obejmować poprawki bezpieczeństwa, nowe funkcje, optymalizacje wydajności oraz dostosowanie do zmieniających się standardów i technologii.",
        protName: "Funkcje i Zagrożenia dla Aktualizacji",
        prot: "Funkcje: <br>&nbsp1. Poprawki Bezpieczeństwa. <br>&nbsp2. Optymalizacje Wydajności. <br>&nbsp3. Usuwanie Błędów i Nietrafionych Funkcji. <br>Zagrożenia: <br>&nbsp1. Problemy Zgodności. <br>&nbsp2. Błędy w Aktualizacjach. <br>&nbsp3. Brak Dostosowania do Starszych Urządzeń. <br><br>Podsumowując, aktualizacje systemu są kluczowe dla bezpieczeństwa i efektywności systemu, ale ważne jest, aby być świadomym zagrożeń i stosować odpowiednie środki ostrożności przed ich instalacją."
    },
    {
        id: 6,
        concept: "Ostrożność w Korzystaniu z Wiadomości E-mail",
        defName: "Zastosowanie Ostrożności: ",
        def: "Wiadomości e-mail stanowią powszechny i nieodzowny środek komunikacji w dzisiejszym świecie. Jednakże, w związku z powszechnością korzystania z poczty elektronicznej, użytkownicy muszą być świadomi potencjalnych zagrożeń związanych z nią i praktykować ostrożność w celu zminimalizowania ryzyka.",
        protName: "Zasady i Zagrożenia:",
        prot: "Zasady Ostrożności: <br>&nbsp1. Sprawdzaj Adresy E-mail. <br>&nbsp2. Sprawdzaj Język i Styl Wiadomości. <br>&nbsp3. Potwierdzaj Prośby Finansowe. <br>Zagrożenia: <br>&nbsp1. Phishing. <br>&nbsp2. Malicious Attachments (Zainfekowane Załączniki). <br>&nbsp3. Business Email Compromise (BEC). <br>&nbsp4.Wycieki Danych. <br><br>Praktykowanie ostrożności w korzystaniu z wiadomości e-mail jest kluczowe dla zapewnienia bezpieczeństwa i ochrony przed różnymi formami cyberzagrożeń."
    },
    {
        id: 7,
        concept: "Korzystanie z Bezpiecznych Stron WWW (SSL)",
        defName: "Czym Jest SSL:",
        def: "Protokół SSL (Secure Socket Layer) to technologia, która zapewnia bezpieczne i szyfrowane połączenia między przeglądarką internetową a serwerem. SSL jest używany do ochrony poufnych danych podczas przesyłania ich przez internet, takich jak dane logowania, informacje karty kredytowej czy inne dane osobowe. Wersja rozwojowa SSL to TLS (Transport Layer Security), obecnie bardziej powszechnie stosowana.",
        protName: "Funkcje i Zagrożenia dla SSL:",
        prot: "Funkcje <br>&nbsp1. Szyfrowanie Danych. <br>&nbsp2. Zabezpieczenie Przed Atakami. <br>&nbsp3. Widoczność Bezpieczeństwa (https://...). <br>Zagrożenia Dla SSL: <br>&nbsp1. Ataki SSL Stripping <br>&nbsp2. Fałszywe Certyfikaty SSL. <br>&nbsp3. Ataki Phishingowe. <br><br>Podsumowując, korzystanie z bezpiecznych stron WWW (SSL) stanowi kluczowy element ochrony danych przesyłanych przez internet. Jednakże, aby utrzymać pełne bezpieczeństwo, ważne jest, aby zarówno użytkownicy, jak i administratorzy stron internetowych, stosowali aktualne zabezpieczenia."
    },
    {
        id: 8,
        concept: "Zarządzanie Prawami Aplikacji",
        defName: "Co Znaczy Zarządzać Prawami Aplikacji:",
        def: "Zarządzanie prawami aplikacji to proces, w ramach którego administratorzy systemów kontrolują i nadzorują uprawnienia, jakie aplikacje mają w systemie operacyjnym lub na danym urządzeniu. Obejmuje to kontrolowanie dostępu do zasobów, danych oraz funkcji systemowych, które są udostępniane poszczególnym aplikacjom.",
        protName: "Zagrożenia i Funkcje:",
        prot: "Funkcje: <br>&nbsp1. Kontrola Dostępu. <br>&nbsp2. Ograniczanie Uprawnień. <br>&nbsp3. Zabezpieczanie Danych. <br>Zagrożenia: <br>&nbsp1. Ataki na Aplikacje. <br>&nbsp2. Złe Konfiguracje Uprawnień. <br>&nbsp3. Nieaktualne Oprogramowanie. <br>&nbsp4. Ataki Spoofingowe. <br><br>Zarządzanie prawami aplikacji jest kluczowym elementem zarządzania bezpieczeństwem systemu, a bieżące monitorowanie, aktualizacje i reakcja na zmieniające się zagrożenia są niezbędne do utrzymania optymalnej ochrony."
    },
    {
        id: 9,
        concept: "Ograniczanie Informacji na Profilach Społecznościowych",
        defName: "Jak ograniczyć informacje:",
        def: "Ograniczanie informacji na profilach społecznościowych to praktyka minimalizowania ilości publicznie dostępnych danych osobowych i informacji o sobie, które użytkownik udostępnia na platformach społecznościowych, takich jak Facebook, Twitter czy Instagram. Celem jest zwiększenie prywatności online oraz zminimalizowanie ryzyka związanego z nadmiernym ujawnianiem informacji.",
        protName: "Kożyści i Zagrożenia dla Informacji: ",
        prot: "Korzyści Ograniczania Informacji: <br>&nbsp1. Prywatność i Bezpieczeństwo w sieci. <br>&nbsp2. Kontrola Wizerunku. <br>&nbsp3. Minimalizacja Ryzyka Kradzieży Tożsamości. <br>Zagrożenia Niedostatecznego Ograniczenia: <br>&nbsp1. Kradzież Tożsamości. <br>&nbsp2. Stalking i Nękanie <br><br>Praktyka ograniczania informacji na profilach społecznościowych jest ważnym aspektem dbania o prywatność online i zabezpieczenia przed różnymi zagrożeniami związanymi z nadmiernym ujawnianiem informacji."
    },
    {
        id: 10,
        concept: "Zabezpieczanie Sieci Wi-Fi",
        defName: "Czym Jest Zabezpieczanie Sieci:",
        def: "Zabezpieczanie sieci Wi-Fi to proces wdrażania środków bezpieczeństwa mających na celu ochronę sieci bezprzewodowej przed nieautoryzowanym dostępem, atakami oraz utratą poufnych danych. Skuteczne zabezpieczanie sieci Wi-Fi jest kluczowe dla prywatności użytkowników oraz zapobiegania potencjalnym zagrożeniom związanym z wykorzystaniem niezabezpieczonej sieci.",
        protName: "Zabezpieczenie i Zagrożenia dla Wi-Fi:",
        prot: "Środki Zabezpieczania Sieci Wi-Fi: <br>&nbsp1. Sile Hasło Dostępu. <br>&nbsp2. Szyfrowanie Sieci. <br>&nbsp3. Ukrycie tożsamości sieci. <br>Zagrożenia dla Sieci Wi-Fi: <br>&nbsp1. Ataki Bruteforce na Hasło. <br>&nbsp2. Ataki Evil Twin. <br>&nbsp3. Złamanie Szyfrowania. <br><br>Zabezpieczanie sieci Wi-Fi jest kluczowym elementem utrzymania bezpieczeństwa danych i prywatności w środowisku bezprzewodowym. "
    },
    {
        id: 11,
        concept: "Kopia Zapasowa Danych",
        defName: "Czym Jest Kopia Zapasowa Danych:",
        def: "Kopia zapasowa danych to proces tworzenia duplikatów informacji przechowywanych na urządzeniach komputerowych lub w chmurze w celu zapewnienia ochrony przed utratą danych spowodowaną awarią sprzętu, atakiem ransomware, przypadkowym usunięciem lub innymi incydentami. Kopia zapasowa jest kluczowym elementem strategii zarządzania danymi i bezpieczeństwa informacji.",
        protName: "Funkcje i Zagrożenia dla Kopii Zapasowej",
        prot: "Funkcje: <br>&nbsp1. Ochrona przed Utratą Danych. <br>&nbsp2. Możliwość Przywrócenia Systemu. <br>&nbsp3. Zapewnienie Ciągłości Biznesowej. <br>&nbsp4. Ochrona Przed Atakami Ransomware. <br>Zagrożenia Dla Kopii Zapasowej: <br>&nbsp1. Niewłaściwe Przechowywanie Kopii Zapasowej. <br>&nbsp2. Brak Zabezpieczeń Kopii Zapasowej. <br>&nbsp3. Błędy Ludzkie. <br><br>Kopia zapasowa danych to kluczowy element strategii bezpieczeństwa informacji, jednak jej skuteczność zależy od właściwego zarządzania i zabezpieczenia. "
    },
    {
        id: 12,
        concept: "Ostrzeżenia Przeglądarki",
        defName: "Czym Są Ostrzeżenia Przeglądarki:",
        def: "Ostrzeżenia przeglądarki to mechanizmy wbudowane w przeglądarki internetowe, które mają na celu informowanie użytkowników o potencjalnych zagrożeniach związanych z odwiedzanymi stronami internetowymi. Te komunikaty ostrzegają przed stronami uznawanymi za niebezpieczne, złośliwe lub potencjalnie szkodliwe dla bezpieczeństwa użytkownika.",
        protName: "Funkcje i Zagrożenia dla Ostrzeżeń:",
        prot: "Funkcje Ostrzeżeń: <br>&nbsp1. Ostrzeżenia o Stronach Phishingowych. <br>&nbsp2. Zabezpieczenia przed Atakami Malware. <br>&nbsp3. Ostrzeżenia o Niezabezpieczonych Połączeniach. <br>Zagrożenia Dla Ostrzeżeń: <br>&nbsp1.Fałszywe Ostrzeżenia. <br>&nbsp2. Ataki MitM (Man-in-the-Middle). <br>&nbsp3. Ignorowanie Ostrzeżeń. <br><br>Podsumowując, choć ostrzeżenia przeglądarki są ważnym narzędziem w ochronie przed potencjalnymi zagrożeniami online, użytkownicy powinni być świadomi ich roli i odpowiednio na nie reagować."
    },
    {
        id: 13,
        concept: "Korzystanie z Bezpiecznych Aplikacji",
        defName: "O co Chodzi z Bezpiecznymi Aplikacjami:",
        def: "Korzystanie z bezpiecznych aplikacji odnosi się do używania oprogramowania, które zostało zaprojektowane i utrzymane z myślą o bezpieczeństwie użytkowników oraz ich danych. Bezpieczne aplikacje są tworzone z zastosowaniem praktyk programistycznych, które minimalizują ryzyko wystąpienia luk w zabezpieczeniach, a także zapewniają ochronę przed potencjalnymi zagrożeniami cybernetycznymi.",
        protName: "Korzyści i Zagrożenia: ",
        prot: "Korzyści Bezpiecznych Aplikacji: <br>&nbsp1. Ochrona Danych Osobowych. <br>&nbsp2. Dwuskładnikowa Autentykacja. <br>&nbsp3. Aktualizacje Bezpieczeństwa. <br>Zagrożenia: <br>&nbsp1. Fałszywe Aplikacje i Malware. <br>&nbsp2. Błędy Wdrażania i Aktualizacji. <br>&nbsp3. Dzielenie Się Niepotrzebnymi Uprawnieniami. <br><br>Podsumowując, korzystanie z bezpiecznych aplikacji to kluczowy krok w utrzymaniu wysokiego poziomu bezpieczeństwa cyfrowego. Użytkownicy powinni być świadomi potencjalnych zagrożeń i stosować środki ostrożności podczas korzystania z aplikacji."
    },
    {
        id: 14,
        concept: "Bezpieczne Płatności Online",
        defName: "Czym Są Bezpieczne Płatności:",
        def: "Bezpieczne płatności online to procesy dokonywania transakcji finansowych przez internet, zapewniające ochronę przed nieautoryzowanym dostępem i kradzieżą danych finansowych. Celem jest umożliwienie użytkownikom bezpiecznego i wygodnego dokonywania zakupów, płatności za usługi czy przekazywania środków przez platformy elektroniczne.",
        protName: "Funkcje i Zagrożenia dla Bezpiecznych Płatności:",
        prot: "Funkcje Płatności: <br>&nbsp1. Szyfrowanie Danych. <br>&nbsp2. Tokeny Bezpieczeństwa. <br>&nbsp3. Monitorowanie Transakcji. <br>&nbsp3. Zabezpieczenia Przeciwwyłudzeniowe. <br>Zagrożenia Bezpiecznej Płatności: <br>&nbsp1. Phishing. <br>&nbsp2. Zastosowanie Niebezpiecznych Aplikacji. <br>&nbsp3. Używanie Słabych Hasieł. <br><br>Podsumowując, bezpieczne płatności online są kluczowe dla ochrony danych finansowych użytkowników, ale wymagają również ich świadomego i bezpiecznego korzystania."
    },
    {
        id: 15,
        concept: "Ochrona Danych w Chmurze",
        defName: "Czym Jest Ochrona Danych w Chmurze:",
        def: "Ochrona danych w chmurze odnosi się do zestawu praktyk, technologii i procedur mających na celu zabezpieczenie informacji przechowywanych w usługach chmurowych. Usługi chmurowe umożliwiają przechowywanie, przetwarzanie i udostępnianie danych online, a ochrona danych w tym kontekście koncentruje się na zabezpieczaniu tych informacji przed nieautoryzowanym dostępem, utratą czy kradzieżą.",
        protName: "Funkcje i Zagrożenia dla Ochrony Danych:",
        prot: "Funkcje Ochrony: <br>&nbsp1. Szyfrowanie Danych. <br>&nbsp2. Monitorowanie Aktywności. <br>&nbsp4. Regularne Aktualizacje i Patche. <br>Zagrożenia: <br>&nbsp1. Nieautoryzowany Dostęp. <br>&nbsp2. Ataki DDos (DoS). <br>&nbsp3. Błędy w Konfiguracji Użytkownika. <br>&nbsp4. Utrata Danych. <br><br>Podsumowując, ochrona danych w chmurze to kompleksowy proces, który wymaga kombinacji środków bezpieczeństwa, zarządzania dostępem oraz regularnych audytów i aktualizacji."
    },
    {
        id: 16,
        concept: "Zarządzanie Plikami Cookies",
        defName: "Czym Jest Zarządzanie Plikami Cookies:",
        def: "Zarządzanie plikami cookies to praktyka kontrolowania i konfigurowania plików cookies, które są przechowywane na urządzeniu użytkownika podczas przeglądania stron internetowych. Pliki cookies są małymi fragmentami danych, które strony internetowe wysyłają i przechowują na urządzeniu użytkownika w celu śledzenia jego aktywności online, dostosowywania treści oraz ułatwiania korzystania z różnych funkcji.",
        protName: "Funkcje i Zagrożenia Cookies",
        prot: "Funkcje Ciasteczek: <br>&nbsp1. Usunięcie Plików Cookies. <br>&nbsp2. Ustawienia Prywatności <br>&nbsp3. Zgoda na Pliki Cookies. <br> Zagrożenia wynikające z Ciasteczek: <br>&nbsp1. Śledzenie Zachowań Użytkownika. <br>&nbsp2. Zastosowanie Niebezpiecznych Cookies. <br>&nbsp3. Ukryte Skrypty Reklamowe. <br><br>Podsumowując, zarządzanie plikami cookies jest kluczowe dla ochrony prywatności online, ale użytkownicy muszą być świadomi zagrożeń i odpowiednio konfigurować ustawienia swoich przeglądarek, aby utrzymać kontrolę nad danymi osobowymi."
    },
]