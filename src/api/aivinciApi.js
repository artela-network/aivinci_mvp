// src/api/aivinciApi.js

const headers = {
    'Content-Type': 'application/json'
};

export const aivinciQuizTask = async () => {
    const response = await fetch("/api/aivinciQuizTask");
    if (!response.ok) {
        throw new Error('Failed to fetch task status');
    }
    return await response.json();
};

export const aivinciQuizTaskStatus = async () => {
    const response = await fetch("/api/aivinciQuizTaskStatus", {
        method: 'POST',
        headers,
        body: JSON.stringify({ action: 'query' })
    });
    if (!response.ok) {
        throw new Error('Failed to fetch task status');
    }
    return await response.json();
};

export const completeAivinciQuizeTask = async (counter) => {
    const response = await fetch("/api/aivinciQuizTaskStatus", {
        method: 'POST',
        headers,
        body: JSON.stringify({
          action: 'completeTask',
          counter: counter
        })
    });
    if (!response.ok) {
        throw new Error('Failed to fetch task status');
    }
    return await response.json();
};

export const pullContexts = async () => {
    const response = await fetch("/api/pullContexts", { method: 'POST', headers });
    if (!response.ok) {
        throw new Error('Failed to pull contexts');
    }
    return await response.json();
};

export const completeTask = async () => {
    const response = await fetch("/api/completeTask", { method: 'POST', headers });
    if (!response.ok) {
        throw new Error('Failed to complete task');
    }
    return await response.json();
};

export const completeTaskWithInput = async (userInput) => {
    const response = await fetch("/api/completeTaskWithInput", {
        method: 'POST',
        headers,
        body: JSON.stringify({ input: userInput })
    });
    if (!response.ok) {
        throw new Error('Failed to complete task with input');
    }
    return await response.json();
};

export const rejectTask = async () => {
    const response = await fetch("/api/rejectTask", { method: 'POST', headers });
    if (!response.ok) {
        throw new Error('Failed to reject task');
    }
    return await response.json();
};
