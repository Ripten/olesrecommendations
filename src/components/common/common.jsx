import React from 'react';
import star from '../../images/star.png';
import favoriteFilms from '../../data/favoriteFilms.js';
import otherFilms from '../../data/otherFilms.js';
import '../../styles/Table.css';


export function getTitle(element) {
    if (element.star === true) {
        return (
            <td className="title-td">
                <div className="stars">
                    {element.title} <img className="star-icon" src={star} alt="star" />
                </div>
            </td>
        )
    }
    else {
        return ( <td className="title-td">{element.title}</td> )
    }
}

export function getRecommendations(request) {
    var films = favoriteFilms.concat(otherFilms).sort((a, b) => (a.title > b.title) ? 1 : -1);

    if (request == null) return films

    switch (request.englishOnly) {
        case true:
            films = films.filter(isEnglish);
            break;
        case false:
            films = films.filter(isForeign);
            break;
        default:
            break;    
    }

    switch (request.colorsOnly) {
        case true:
            films = films.filter(isColorFilm);
            break;
        case false:
            films = films.filter(isBlackAndWhiteFilm);
            break;
        default:
            break;    
    }

    switch (request.liveActionOnly) {
        case true:
            films = films.filter(isLiveAction);
            break;
        case false:
            films = films.filter(isAnimation);
            break;
        default:
            break;    
    }

    if (request.tags.length > 0) {
        films = films.filter(film => filmContainsAtLeastOneTag(film.tags, request.tags));
    }

    return films;
}

function isEnglish(film) {
    return film.language === "English";
}

function isForeign(film) {
    return film.language !== "English";
}

function isColorFilm(film) {
    return !film.tags.includes("BLACK_AND_WHITE");
}

function isBlackAndWhiteFilm(film) {
    return film.tags.includes("BLACK_AND_WHITE");
}

function isLiveAction(film) {
    return !film.tags.includes("ANIMATION");
}

function isAnimation(film) {
    return film.tags.includes("ANIMATION");
}

function filmContainsAtLeastOneTag(filmTags, requestTags) {
    return filmTags.some(tag => requestTags.includes(tag));
}

export function getImdbId(imdbLink) {
    var urlString = String(imdbLink);
    return urlString.slice(27).replace('/', '');
}

export function getImdbScore(ratings) {
    var score = "";

    if (ratings != null) {
        ratings.forEach(rating => {
            if (rating.Source === "Internet Movie Database") {
                score = rating.Value.substring(0, 3);
            }
        });
    }

    return score;
}

export function getDirectorOrWriter(metadata) {
    if (metadata.Director !== "N/A") {
        return "Directed by " + metadata.Director;
    }
    else if (metadata.Writer !== "N/A") {
        return "Written by " + metadata.Writer;
    }
    else {
        return "";
    }
}

export function createTag(tag, title) {
    const key = title + " - " + tag;
    var formatted = "";
    
    if (tag === "BLACK_AND_WHITE") {
        formatted = "BlackAndWhite";
    }
    else if (tag === "KID_FRIENDLY") {
        formatted = "Kid friendly";
    } 
    else {
        formatted = tag.charAt(0) + tag.substring(1).toLowerCase();
    }

    return <button className="tag-button" key={key}>{formatted}</button>;
}