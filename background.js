chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

const lsq = "https://in21.leadsquared.com/LeadManagement/SmartViews";

console.log("hello");

chrome.action.onClicked.addListener(async (tab) => {
  console.log("hello");

  if (tab.url.startsWith(lsq)) {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === "ON" ? "OFF" : "ON";

    await chrome.action
      .setBadgeText({
        tabId: tab.id,
        text: nextState,
      })
      .then(() => console.log(tab.id, nextState));

    if (nextState === "ON") {
      await chrome.scripting
        .executeScript({
          files: ["content.js"],
          target: { tabId: tab.id },
        })
        .then(() => console.log("injected"));
    }
  }
});
