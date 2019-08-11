const SteamScript = include("engines.wine.quick_script.steam_script");
const {LATEST_STAGING_VERSION} = include("engines.wine.engine.versions");

new SteamScript()
    .name("Assassin’s Creed® III")
    .editor("Ubisoft Montreal")
    .author("Plata")
    .appId(208480)
    .wineVersion(LATEST_STAGING_VERSION)
    .wineDistribution("staging");
