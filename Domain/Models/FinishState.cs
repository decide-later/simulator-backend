namespace simulator_backend.Domain.Models
{
    public class FinishState : State
    {
        private readonly string Name;

        public FinishState(string Name)
        {
            this.Name = Name;
        }

        public string getName()
        {
            return this.Name;
        }

        public string getType()
        {
            return "finish";
        }
    }
}