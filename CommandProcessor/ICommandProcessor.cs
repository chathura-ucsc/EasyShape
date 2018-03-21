using System;

namespace CommandProcessor
{
    public interface ICommandProcessor
    {
        Object ProcessCommand(string command);
    }
}