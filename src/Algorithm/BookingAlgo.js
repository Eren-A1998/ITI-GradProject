
  Array.prototype.min = function () {
    return Math.min.apply(null, this);
};

export const getStationsInbetweenSameLine = (sourceId, destinationId, lineNumber,lines) => {
    let path = lines[lineNumber - 1].Stations.slice(sourceId > destinationId ? destinationId - 1 : sourceId - 1, destinationId < sourceId ? sourceId : destinationId);
    if (sourceId > destinationId) { path.reverse() }
    return path;
}

export const getPrice = (Path, checkLine) => {
    if (checkLine != undefined) {
        if (Path.length <= 9)
            return 7
        else if (Path.length > 9 && Path.length <= 16)
            return 10
        else if (Path.length > 16 && Path.length <= 40)
            return 12
    }
    else {
        if (Path.length <= 9)
            return 5
        else if (Path.length > 9 && Path.length <= 16)
            return 7
        else if (Path.length > 16 && Path.length <= 40)
            return 10
    }
}

export const getStationsWithFlags = (fromLineNumber, flagNumber,lines) => {
    let lineStations = lines[fromLineNumber - 1].Stations;
    return lineStations.filter(station => station.Flag == flagNumber);
}

export const getShortestPath = (sourceId, destinationId, sourceLineNumber, destinationLineNumber,lines) => {
    if (sourceLineNumber == destinationLineNumber)
        return getStationsInbetweenSameLine(sourceId, destinationId, sourceLineNumber,lines);

    else if (Math.abs(sourceLineNumber - destinationLineNumber) == 2) {
        let firstPath = [];
        let lastPath;
        let fullPath = [];
        let sub = Math.abs(sourceLineNumber - destinationLineNumber);
        let firstFlags = getStationsWithFlags(sub, destinationLineNumber > sourceLineNumber ? destinationLineNumber : sourceLineNumber,lines)

        firstPath = getShortestPathInTwoLines(destinationId, firstFlags[0].ID, destinationLineNumber, Math.abs(sourceLineNumber - destinationLineNumber),lines);
        firstPath.reverse()
        uniqueFirstPath = [...new Map(firstPath.map(item => [item["Name"], item])).values()];

        lastPath = getShortestPathInTwoLines(firstFlags[0].ID, sourceId, Math.abs(sourceLineNumber - destinationLineNumber), sourceLineNumber,lines);
        lastPath.reverse();
        fullPath.push(...lastPath, ...uniqueFirstPath)

        return [...new Map(fullPath.map(item => [item["Name"], item])).values()];
    }

    else
        return getShortestPathInTwoLines(sourceId, destinationId, sourceLineNumber, destinationLineNumber,lines)
}

export const getShortestPathInTwoLines = (sourceId, destinationId, sourceLineNumber, destinationLineNumber,lines) => {
    let sourceFlags = getStationsWithFlags(sourceLineNumber, destinationLineNumber,lines).sort((a, b) => a.Name.localeCompare(b.Name),lines);
    let destinationFlags = getStationsWithFlags(destinationLineNumber, sourceLineNumber,lines).sort((a, b) => a.Name.localeCompare(b.Name),lines);
    let allPath = {};
    let lengthArr = []

    for (let i = 0; i < sourceFlags.length; i++) {
        var res = getPath(sourceId, destinationId, sourceFlags[i].ID, destinationFlags[i].ID, sourceLineNumber, destinationLineNumber,lines);
        allPath["path" + (i + 1)] = res;
        lengthArr.push(res.length);
    }
    let indexOfMinimumLength = lengthArr.indexOf(lengthArr.min());
    return allPath["path" + (indexOfMinimumLength + 1)];
}

export const getPath = (sourceId, destinationId, sourceFlagId, destinationFlagId, sourceLineNumber, destinationLineNumber,lines) => {
    let path = [];
    path.push(...getStationsInbetweenSameLine(sourceId, sourceFlagId, sourceLineNumber,lines), ...getStationsInbetweenSameLine(destinationFlagId, destinationId, destinationLineNumber,lines));
    return [...new Map(path.map(item => [item["Name"], item])).values()];
}